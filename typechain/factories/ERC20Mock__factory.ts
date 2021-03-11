/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC20Mock } from "../ERC20Mock";

export class ERC20Mock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): Promise<ERC20Mock> {
    return super.deploy(name, symbol, overrides || {}) as Promise<ERC20Mock>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ERC20Mock {
    return super.attach(address) as ERC20Mock;
  }
  connect(signer: Signer): ERC20Mock__factory {
    return super.connect(signer) as ERC20Mock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
    name: "PERMIT_TYPEHASH",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60c060408190528060526200158d8239604051908190036052019020608052503480156200002c57600080fd5b506040516200163138038062001631833981810160405260408110156200005257600080fd5b81019080805160405193929190846401000000008211156200007357600080fd5b9083019060208201858111156200008957600080fd5b8251640100000000811182820188101715620000a457600080fd5b82525081516020918201929091019080838360005b83811015620000d3578181015183820152602001620000b9565b50505050905090810190601f168015620001015780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200012557600080fd5b9083019060208201858111156200013b57600080fd5b82516401000000008111828201881017156200015657600080fd5b82525081516020918201929091019080838360005b83811015620001855781810151838201526020016200016b565b50505050905090810190601f168015620001b35780820380516001836020036101000a031916815260200191505b50604052505050818181818160039080519060200190620001d6929190620002a5565b508051620001ec906004906020840190620002a5565b50506005805460ff19166012179055506040514690806052620015df823960405190819003605201902084516020860120909150620002336001600160e01b036200028916565b8051602091820120604080518084019590955284810193909352606084015260808301939093523060a08084019190915281518084038201815260c0909301909152815191909201209052506200034792505050565b6040805180820190915260018152603160f81b60208201525b90565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002e857805160ff191683800117855562000318565b8280016001018555821562000318579182015b8281111562000318578251825591602001919060010190620002fb565b50620003269291506200032a565b5090565b620002a291905b8082111562000326576000815560010162000331565b60805160a051611218620003756000398061061752806109555250806105ea52806108cd52506112186000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806340c10f19116100b257806395d89b4111610081578063a9059cbb11610066578063a9059cbb14610398578063d505accf146103d1578063dd62ed3e1461042f5761011b565b806395d89b4114610357578063a457c2d71461035f5761011b565b806340c10f19146102ae57806354fd4d50146102e957806370a08231146102f15780637ecebe00146103245761011b565b806330adf81f116100ee57806330adf81f14610247578063313ce5671461024f5780633644e5151461026d57806339509351146102755761011b565b806306fdde0314610120578063095ea7b31461019d57806318160ddd146101ea57806323b872dd14610204575b600080fd5b61012861046a565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561016257818101518382015260200161014a565b50505050905090810190601f16801561018f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101d6600480360360408110156101b357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561051e565b604080519115158252519081900360200190f35b6101f261053b565b60408051918252519081900360200190f35b6101d66004803603606081101561021a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610541565b6101f26105e8565b61025761060c565b6040805160ff9092168252519081900360200190f35b6101f2610615565b6101d66004803603604081101561028b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610639565b6102e7600480360360408110156102c457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561069a565b005b6101286106a8565b6101f26004803603602081101561030757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166106df565b6101f26004803603602081101561033a57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610707565b610128610719565b6101d66004803603604081101561037557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610798565b6101d6600480360360408110156103ae57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610813565b6102e7600480360360e08110156103e757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610827565b6101f26004803603604081101561044557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610b14565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105145780601f106104e957610100808354040283529160200191610514565b820191906000526020600020905b8154815290600101906020018083116104f757829003601f168201915b5050505050905090565b600061053261052b610b4c565b8484610b50565b50600192915050565b60025490565b600061054e848484610c97565b6105de8461055a610b4c565b6105d98560405180606001604052806028815260200161114d6028913973ffffffffffffffffffffffffffffffffffffffff8a166000908152600160205260408120906105a5610b4c565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff610e7316565b610b50565b5060019392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60055460ff1690565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000610532610646610b4c565b846105d98560016000610657610b4c565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610f2416565b6106a48282610f9f565b5050565b60408051808201909152600181527f3100000000000000000000000000000000000000000000000000000000000000602082015290565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b60066020526000908152604090205481565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105145780601f106104e957610100808354040283529160200191610514565b60006105326107a5610b4c565b846105d9856040518060600160405280602581526020016111be60259139600160006107cf610b4c565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610e7316565b6000610532610820610b4c565b8484610c97565b4284101561089657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff80881660008181526006602090815260408083208054600180820190925582517f00000000000000000000000000000000000000000000000000000000000000008186015280840196909652958c166060860152608085018b905260a085019590955260c08085018a90528151808603909101815260e0850182528051908301207f19010000000000000000000000000000000000000000000000000000000000006101008601527f000000000000000000000000000000000000000000000000000000000000000061010286015261012280860182905282518087039091018152610142860180845281519185019190912090859052610162860180845281905260ff8a166101828701526101a286018990526101c2860188905291519095919491926101e28084019391927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081019281900390910190855afa158015610a17573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811615801590610a9257508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b610afd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b610b088a8a8a610b50565b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b3390565b73ffffffffffffffffffffffffffffffffffffffff8316610bbc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061119a6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c28576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806111056022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d03576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806111756025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d6f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806110e26023913960400191505060405180910390fd5b610d7a8383836110dc565b610dca816040518060600160405280602681526020016111276026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260208190526040902054919063ffffffff610e7316565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082209390935590841681522054610e0c908263ffffffff610f2416565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610f1c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ee1578181015183820152602001610ec9565b50505050905090810190601f168015610f0e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610f9857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff821661102157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61102d600083836110dc565b600254611040908263ffffffff610f2416565b60025573ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054611079908263ffffffff610f2416565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220fb32da675d6f1ed636de1bc3bee597e1e89b79736543d38469181b7102d786fd64736f6c634300060a00335065726d69742861646472657373206f776e65722c61646472657373207370656e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";