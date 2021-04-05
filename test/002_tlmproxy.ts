import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address'
import { signatures } from '@yield-protocol/utils'
const { getSignatureDigest, privateKey0, signPacked } = signatures
const chainId = 31337 // buidlerevm chain id
const name = 'Yield'

import ERC20MockArtifact from '../artifacts/contracts/mocks/ERC20Mock.sol/ERC20Mock.json'
import FYDaiMockArtifact from '../artifacts/contracts/mocks/FYDaiMock.sol/FYDaiMock.json'
import ControllerMockArtifact from '../artifacts/contracts/mocks/ControllerMock.sol/ControllerMock.json'
import TLMMockArtifact from '../artifacts/contracts/mocks/TLMMock.sol/TLMMock.json'
import TLMProxyArtifact from '../artifacts/contracts/TLMProxy.sol/TLMProxy.json'

import DSProxyFactoryArtifact from '../artifacts/contracts/external/dsproxy.sol/DSProxyFactory.json'
import ProxyRegistryArtifact from '../artifacts/contracts/external/ProxyRegistry.sol/ProxyRegistry.json'

import { ERC20Mock } from '../typechain/ERC20Mock'
import { FYDaiMock } from '../typechain/FYDaiMock'
import { ControllerMock } from '../typechain/ControllerMock'
import { TLMMock } from '../typechain/TLMMock'
import { TLMProxy } from '../typechain/TLMProxy'

import { DSProxyFactory } from '../typechain/DSProxyFactory'
import { ProxyRegistry } from '../typechain/ProxyRegistry'
import { DSProxy } from '../typechain/DSProxy'

import { ethers, waffle } from 'hardhat'
import { BigNumber } from 'ethers'
import { expect } from 'chai'
const { deployContract } = waffle

describe('TLM Proxy', () => {
  let ownerAcc: SignerWithAddress
  let owner: string
  let otherAcc: SignerWithAddress
  let other: string

  let weth: ERC20Mock
  let dai: ERC20Mock
  let fyDai: FYDaiMock
  let fyDai2: FYDaiMock
  let controller: ControllerMock
  let tlm: TLMMock
  let gemJoin: string
  let tlmProxy: TLMProxy

  let proxyFactory: DSProxyFactory
  let proxyRegistry: ProxyRegistry
  let dsProxy: DSProxy

  const maturity = 1640995199
  const maturity2 = 1640995200

  const WETH = ethers.utils.formatBytes32String('ETH-A')
  const FYDAI = ethers.utils.formatBytes32String('FYDAI')
  const FYDAI2 = ethers.utils.formatBytes32String('FYDAI2')
  const WAD = BigNumber.from(10).pow(18)
  const MAX = ethers.constants.MaxUint256
  const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

  before(async () => {
    const signers = await ethers.getSigners()
    ownerAcc = signers[0]
    owner = await ownerAcc.getAddress()

    otherAcc = signers[1]
    other = await otherAcc.getAddress()
  })

  beforeEach(async () => {
    weth = (await deployContract(ownerAcc, ERC20MockArtifact, ['WETH', 'Ether Wrapper'])) as ERC20Mock
    dai = (await deployContract(ownerAcc, ERC20MockArtifact, ['DAI', 'Dai Stablecoin'])) as ERC20Mock
    fyDai = (await deployContract(ownerAcc, FYDaiMockArtifact, [FYDAI, 'fyDai Maturing Token', maturity])) as FYDaiMock
    fyDai2 = (await deployContract(ownerAcc, FYDaiMockArtifact, [FYDAI2, 'fyDai2 Maturing Token', maturity2])) as FYDaiMock
    controller = (await deployContract(ownerAcc, ControllerMockArtifact, [weth.address, [fyDai.address, fyDai2.address]])) as ControllerMock
    tlm = (await deployContract(ownerAcc, TLMMockArtifact, [dai.address, fyDai.address])) as TLMMock
    gemJoin = (await tlm.ilks(FYDAI)).gemJoin
    tlmProxy = (await deployContract(ownerAcc, TLMProxyArtifact, [controller.address, tlm.address])) as TLMProxy

    // Setup DSProxyFactory, DSProxyCache and DSProxyRegistry
    proxyFactory = (await deployContract(ownerAcc, DSProxyFactoryArtifact, [])) as DSProxyFactory
    proxyRegistry = (await deployContract(ownerAcc, ProxyRegistryArtifact, [proxyFactory.address])) as ProxyRegistry

    // Build a dsProxy for other
    await proxyRegistry['build(address)'](other)
    dsProxy = (await ethers.getContractAt('DSProxy', await proxyRegistry.proxies(other)) as DSProxy).connect(otherAcc)

    // Post WAD Weth for other at Controller, so he can borrow
    await weth.mint(owner, WAD)
    await weth.approve(await controller.treasury(), WAD)
    await controller.post(WETH, owner, other, WAD)
  })

  it('registers and fetches a maturity/ilk pair', async () => {
    await expect(tlmProxy.register(0, FYDAI)).to.be.revertedWith('Series not found')
    await expect(tlmProxy.register(maturity, WETH)).to.be.revertedWith('Ilk not found')
    await expect(tlmProxy.register(maturity2, FYDAI)).to.be.revertedWith('Mismatched FYDai and Gem')
    expect(await tlmProxy.register(maturity, FYDAI)).to.emit(tlmProxy, 'SeriesRegistered')

    expect((await tlmProxy.fetch(maturity, FYDAI))[0]).to.equal(fyDai.address)
    expect((await tlmProxy.fetch(maturity, FYDAI))[1]).to.equal(gemJoin)
  })

  describe('once a maturity/ilk pair has been registered', async () => {
    beforeEach(async () => {
      await tlmProxy.register(maturity, FYDAI)
    })

    it('borrows fyDai from controller and sells it to the TLM', async () => {
      await controller.connect(otherAcc).addDelegate(tlmProxy.address)
      await expect(await tlmProxy.connect(otherAcc).borrow(WETH, maturity, FYDAI, other, WAD))
        .to.emit(fyDai, 'Transfer')
        .withArgs(ZERO_ADDRESS, tlmProxy.address, WAD)
        .to.emit(fyDai, 'Transfer')
        .withArgs(tlmProxy.address, gemJoin, WAD)
        .to.emit(dai, 'Transfer')
        .withArgs(ZERO_ADDRESS, other, WAD)
      expect(await dai.balanceOf(other)).to.equal(WAD)
    })

    it('borrows fyDai from controller and sells it to the TLM, through dsProxy', async () => {
      await controller.connect(otherAcc).addDelegate(dsProxy.address)

      const borrowCall = tlmProxy.interface.encodeFunctionData('borrow', [WETH, maturity, FYDAI, other, WAD])
      await expect(await dsProxy['execute(address,bytes)'](tlmProxy.address, borrowCall))
        .to.emit(fyDai, 'Transfer')
        .withArgs(ZERO_ADDRESS, dsProxy.address, WAD)
        .to.emit(fyDai, 'Transfer')
        .withArgs(dsProxy.address, gemJoin, WAD)
        .to.emit(dai, 'Transfer')
        .withArgs(ZERO_ADDRESS, other, WAD)
      expect(await dai.balanceOf(other)).to.equal(WAD)
    })

    it('borrows fyDai from controller and sells it to the TLM, through dsProxy, with a packed signature', async () => {
      const controllerDigest = getSignatureDigest(
        name,
        controller.address,
        chainId,
        {
          user: other,
          delegate: dsProxy.address,
        },
        (await controller.signatureCount(other)).toString(),
        MAX
      )
      const controllerSig = signPacked(controllerDigest, privateKey0)

      const borrowCall = tlmProxy.interface.encodeFunctionData('borrowWithSignature', [WETH, maturity, FYDAI, other, WAD, controllerSig])
      await dsProxy['execute(address,bytes)'](tlmProxy.address, borrowCall)
      expect(await dai.balanceOf(other)).to.equal(WAD)
    })
  })
})
