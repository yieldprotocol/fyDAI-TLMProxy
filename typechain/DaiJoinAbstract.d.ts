/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface DaiJoinAbstractInterface extends ethers.utils.Interface {
  functions: {
    "cage()": FunctionFragment;
    "dai()": FunctionFragment;
    "deny(address)": FunctionFragment;
    "exit(address,uint256)": FunctionFragment;
    "join(address,uint256)": FunctionFragment;
    "live()": FunctionFragment;
    "rely(address)": FunctionFragment;
    "vat()": FunctionFragment;
    "wards(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "cage", values?: undefined): string;
  encodeFunctionData(functionFragment: "dai", values?: undefined): string;
  encodeFunctionData(functionFragment: "deny", values: [string]): string;
  encodeFunctionData(
    functionFragment: "exit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "join",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "live", values?: undefined): string;
  encodeFunctionData(functionFragment: "rely", values: [string]): string;
  encodeFunctionData(functionFragment: "vat", values?: undefined): string;
  encodeFunctionData(functionFragment: "wards", values: [string]): string;

  decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dai", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vat", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;

  events: {};
}

export class DaiJoinAbstract extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  listeners<T, G>(
    eventFilter?: TypedEventFilter<T, G>
  ): Array<TypedListener<T, G>>;
  off<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  on<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  once<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeListener<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeAllListeners<T, G>(eventFilter: TypedEventFilter<T, G>): this;

  queryFilter<T, G>(
    event: TypedEventFilter<T, G>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<T & G>>>;

  interface: DaiJoinAbstractInterface;

  functions: {
    cage(overrides?: Overrides): Promise<ContractTransaction>;

    "cage()"(overrides?: Overrides): Promise<ContractTransaction>;

    dai(overrides?: CallOverrides): Promise<[string]>;

    "dai()"(overrides?: CallOverrides): Promise<[string]>;

    deny(usr: string, overrides?: Overrides): Promise<ContractTransaction>;

    "deny(address)"(
      usr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    exit(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "exit(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    join(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "join(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    live(overrides?: CallOverrides): Promise<[BigNumber]>;

    "live()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    rely(usr: string, overrides?: Overrides): Promise<ContractTransaction>;

    "rely(address)"(
      usr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    vat(overrides?: CallOverrides): Promise<[string]>;

    "vat()"(overrides?: CallOverrides): Promise<[string]>;

    wards(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "wards(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  cage(overrides?: Overrides): Promise<ContractTransaction>;

  "cage()"(overrides?: Overrides): Promise<ContractTransaction>;

  dai(overrides?: CallOverrides): Promise<string>;

  "dai()"(overrides?: CallOverrides): Promise<string>;

  deny(usr: string, overrides?: Overrides): Promise<ContractTransaction>;

  "deny(address)"(
    usr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  exit(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "exit(address,uint256)"(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  join(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "join(address,uint256)"(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  live(overrides?: CallOverrides): Promise<BigNumber>;

  "live()"(overrides?: CallOverrides): Promise<BigNumber>;

  rely(usr: string, overrides?: Overrides): Promise<ContractTransaction>;

  "rely(address)"(
    usr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  vat(overrides?: CallOverrides): Promise<string>;

  "vat()"(overrides?: CallOverrides): Promise<string>;

  wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "wards(address)"(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    cage(overrides?: CallOverrides): Promise<void>;

    "cage()"(overrides?: CallOverrides): Promise<void>;

    dai(overrides?: CallOverrides): Promise<string>;

    "dai()"(overrides?: CallOverrides): Promise<string>;

    deny(usr: string, overrides?: CallOverrides): Promise<void>;

    "deny(address)"(usr: string, overrides?: CallOverrides): Promise<void>;

    exit(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "exit(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    join(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "join(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    live(overrides?: CallOverrides): Promise<BigNumber>;

    "live()"(overrides?: CallOverrides): Promise<BigNumber>;

    rely(usr: string, overrides?: CallOverrides): Promise<void>;

    "rely(address)"(usr: string, overrides?: CallOverrides): Promise<void>;

    vat(overrides?: CallOverrides): Promise<string>;

    "vat()"(overrides?: CallOverrides): Promise<string>;

    wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "wards(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    cage(overrides?: Overrides): Promise<BigNumber>;

    "cage()"(overrides?: Overrides): Promise<BigNumber>;

    dai(overrides?: CallOverrides): Promise<BigNumber>;

    "dai()"(overrides?: CallOverrides): Promise<BigNumber>;

    deny(usr: string, overrides?: Overrides): Promise<BigNumber>;

    "deny(address)"(usr: string, overrides?: Overrides): Promise<BigNumber>;

    exit(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "exit(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    join(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "join(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    live(overrides?: CallOverrides): Promise<BigNumber>;

    "live()"(overrides?: CallOverrides): Promise<BigNumber>;

    rely(usr: string, overrides?: Overrides): Promise<BigNumber>;

    "rely(address)"(usr: string, overrides?: Overrides): Promise<BigNumber>;

    vat(overrides?: CallOverrides): Promise<BigNumber>;

    "vat()"(overrides?: CallOverrides): Promise<BigNumber>;

    wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "wards(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cage(overrides?: Overrides): Promise<PopulatedTransaction>;

    "cage()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    dai(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "dai()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deny(usr: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "deny(address)"(
      usr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    exit(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "exit(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    join(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "join(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    live(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "live()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rely(usr: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "rely(address)"(
      usr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    vat(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vat()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "wards(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
