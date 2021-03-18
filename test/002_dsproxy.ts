import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address'
import { id } from '@yield-protocol/utils'

import ERC20MockArtifact from '../artifacts/contracts/mocks/ERC20Mock.sol/ERC20Mock.json'
import FYDaiMockArtifact from '../artifacts/contracts/mocks/FYDaiMock.sol/FYDaiMock.json'
import ControllerMockArtifact from '../artifacts/contracts/mocks/ControllerMock.sol/ControllerMock.json'
import TLMMockArtifact from '../artifacts/contracts/mocks/TLMMock.sol/TLMMock.json'

import { ERC20Mock } from '../typechain/ERC20Mock'
import { FYDaiMock } from '../typechain/FYDaiMock'
import { ControllerMock } from '../typechain/ControllerMock'
import { TLMMock } from '../typechain/TLMMock'

import { ethers, waffle } from 'hardhat'
import { BigNumber } from 'ethers'
import { expect } from 'chai'
import { ITreasury, TLMProxy } from '../typechain'
const { deployContract } = waffle

const DSProxy = artifacts.require('DSProxy')
const DSProxyFactory = artifacts.require('DSProxyFactory')
const DSProxyRegistry = artifacts.require('ProxyRegistry')

describe('Mocks', () => {
    let ownerAcc: SignerWithAddress
    let owner: string
    let otherAcc: SignerWithAddress
    let other: string
  
    let weth: ERC20Mock
    let dai: ERC20Mock
    let fyDai: FYDaiMock
    let controller: ControllerMock
    let tlm: TLMMock
    let proxy: TLMProxy

    let proxyFactory: Contract
    let proxyRegistry: Contract
    let dsProxy: Contract
  
    const maturity = '1640995199'
  
    const WETH = ethers.utils.formatBytes32String('ETH-A')
    const FYDAI = ethers.utils.formatBytes32String('FYDAI')
    const WAD = BigNumber.from(10).pow(18)
    const MAX = ethers.constants.MaxUint256
  
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
      controller = (await deployContract(ownerAcc, ControllerMockArtifact, [weth.address, [fyDai.address]])) as ControllerMock
      tlm = (await deployContract(ownerAcc, TLMMockArtifact, [dai.address, fyDai.address])) as TLMMock
      
      // taken from https://github.com/yieldprotocol/fyDai-USDCProxy/blob/main/test/524_usdcProxy.ts
      // Setup DSProxyFactory and DSProxyCache
      proxyFactory = await DSProxyFactory.new({ from: owner })

      // Setup DSProxyRegistry
      proxyRegistry = await DSProxyRegistry.new(proxyFactory.address, { from: owner })

      await proxyRegistry.build({ from: user1 })
      dsProxy = await DSProxy.at(await proxyRegistry.proxies(user1))
    })
  
    it('posts WETH to controller', async () => {
      await weth.mint(owner, WAD);
      await weth.approve(await controller.treasury(), MAX)
      await controller.post(WETH, owner, owner, WAD)
      expect(await controller.posted(WETH)).to.be.true
    })
  
    describe('once Weth has been posted', async () => {
      beforeEach(async () => {
        await weth.mint(owner, WAD);
        await weth.approve(await controller.treasury(), MAX)
        await controller.post(WETH, owner, owner, WAD)
      })
  
      it('borrows fyDai from controller', async () => {
        await controller.borrow(WETH, maturity, owner, owner, WAD)
        expect(await fyDai.balanceOf(owner)).to.equal(WAD)
      })
  
    it('sells fyDai to tlm', async () => {
      await fyDai.mint(owner, WAD);
      await fyDai.approve((await tlm.ilks(FYDAI)).gemJoin, MAX)
      await tlm.sellGem(FYDAI, owner, WAD)
      expect(await dai.balanceOf(owner)).to.equal(WAD)
    })

    it('borrows from tlm using DSProxy', async () => {
      const calldata = proxy.contract.methods
        .borrow(,
          WETH,
          maturity1,
          ilk1,
          to,
          fyDaiTokens1,
        )
        .encodeABI()
      const tx = await dsProxy.methods['execute(address,bytes)'](proxy.address, calldata, {
          from: user1,
      })
      //check result here
    })

  })