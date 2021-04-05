/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { GemJoinMock } from "../GemJoinMock";

export class GemJoinMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(gem_: string, overrides?: Overrides): Promise<GemJoinMock> {
    return super.deploy(gem_, overrides || {}) as Promise<GemJoinMock>;
  }
  getDeployTransaction(
    gem_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(gem_, overrides || {});
  }
  attach(address: string): GemJoinMock {
    return super.attach(address) as GemJoinMock;
  }
  connect(signer: Signer): GemJoinMock__factory {
    return super.connect(signer) as GemJoinMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GemJoinMock {
    return new Contract(address, _abi, signerOrProvider) as GemJoinMock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IFYDai",
        name: "gem_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "gem",
    outputs: [
      {
        internalType: "contract IFYDai",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "pull",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161023c38038061023c8339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b03166101d161006b6000398060a9528061012052506101d16000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80637bd2bea71461003b578063f2d5d56b1461006c575b600080fd5b6100436100a7565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100a56004803603604081101561008257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356100cb565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b604080517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301523060248301526044820184905291517f0000000000000000000000000000000000000000000000000000000000000000909216916323b872dd916064808201926020929091908290030181600087803b15801561016b57600080fd5b505af115801561017f573d6000803e3d6000fd5b505050506040513d602081101561019557600080fd5b5050505056fea264697066735822122066508644842736e3858c025a3023cea551ebd6ae3f278f7f8d4c7209cd29f2f764736f6c634300060a0033";
