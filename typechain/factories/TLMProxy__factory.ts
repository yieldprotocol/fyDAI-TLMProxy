/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TLMProxy } from "../TLMProxy";

export class TLMProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _controller: string,
    tlm_: string,
    overrides?: Overrides
  ): Promise<TLMProxy> {
    return super.deploy(
      _controller,
      tlm_,
      overrides || {}
    ) as Promise<TLMProxy>;
  }
  getDeployTransaction(
    _controller: string,
    tlm_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_controller, tlm_, overrides || {});
  }
  attach(address: string): TLMProxy {
    return super.attach(address) as TLMProxy;
  }
  connect(signer: Signer): TLMProxy__factory {
    return super.connect(signer) as TLMProxy__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TLMProxy {
    return new Contract(address, _abi, signerOrProvider) as TLMProxy;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IController",
        name: "_controller",
        type: "address",
      },
      {
        internalType: "contract DssTlmAbstract",
        name: "tlm_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "FYDAI",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNIT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "collateral",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "maturity",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "ilk",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fyDaiToBorrow",
        type: "uint256",
      },
    ],
    name: "borrow",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "controller",
    outputs: [
      {
        internalType: "contract IController",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tlm",
    outputs: [
      {
        internalType: "contract DssTlmAbstract",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516104193803806104198339818101604052604081101561003357600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c6103916100886000398061024252806103155250806101e1528061033952506103916000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063b3b65f1611610050578063b3b65f16146100a1578063bf4c1bce146100ec578063f77c47911461011d57610072565b80631a3fed60146100775780639d8e217714610091578063ad5c464814610099575b600080fd5b61007f610125565b60408051918252519081900360200190f35b61007f610149565b61007f610159565b61007f600480360360a08110156100b757600080fd5b5080359060208101359060408101359073ffffffffffffffffffffffffffffffffffffffff606082013516906080013561017d565b6100f4610313565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100f4610337565b7f465944414900000000000000000000000000000000000000000000000000000081565b6b033b2e3c9fd0803ce800000081565b7f4554482d4100000000000000000000000000000000000000000000000000000081565b604080517f801d325f000000000000000000000000000000000000000000000000000000008152600481018790526024810186905233604482015230606482015260848101839052905160009173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163801d325f9160a480820192869290919082900301818387803b15801561022857600080fd5b505af115801561023c573d6000803e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663cb8ec2a38585856040518463ffffffff1660e01b8152600401808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b1580156102ef57600080fd5b505af1158015610303573d6000803e3d6000fd5b5060009998505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f00000000000000000000000000000000000000000000000000000000000000008156fea2646970667358221220db4befdf515fe8fc681ea6e024cfcd02b29fbb2b8d599c69994f9e06330a638c64736f6c634300060a0033";
