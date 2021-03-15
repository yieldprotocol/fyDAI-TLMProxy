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
const { deployContract } = waffle

const DSProxy = artifacts.require('DSProxy')
const DSProxyFactory = artifacts.require('DSProxyFactory')
const DSProxyRegistry = artifacts.require('ProxyRegistry')

