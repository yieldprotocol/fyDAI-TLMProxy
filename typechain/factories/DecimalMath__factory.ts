/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DecimalMath } from "../DecimalMath";

export class DecimalMath__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<DecimalMath> {
    return super.deploy(overrides || {}) as Promise<DecimalMath>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DecimalMath {
    return super.attach(address) as DecimalMath;
  }
  connect(signer: Signer): DecimalMath__factory {
    return super.connect(signer) as DecimalMath__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DecimalMath {
    return new Contract(address, _abi, signerOrProvider) as DecimalMath;
  }
}

const _abi = [
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
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50608b8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80639d8e217714602d575b600080fd5b60336045565b60408051918252519081900360200190f35b6b033b2e3c9fd0803ce80000008156fea2646970667358221220ffcf2eb9302f00b0e7ec82e6b649324c352a018b2eb064bd4fdcec520d2ca56064736f6c634300060a0033";