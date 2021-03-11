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

interface GemJoinMockInterface extends ethers.utils.Interface {
  functions: {
    "gem()": FunctionFragment;
    "pull(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "gem", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pull",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "gem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pull", data: BytesLike): Result;

  events: {};
}

export class GemJoinMock extends Contract {
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

  interface: GemJoinMockInterface;

  functions: {
    gem(overrides?: CallOverrides): Promise<[string]>;

    "gem()"(overrides?: CallOverrides): Promise<[string]>;

    pull(
      from: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "pull(address,uint256)"(
      from: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  gem(overrides?: CallOverrides): Promise<string>;

  "gem()"(overrides?: CallOverrides): Promise<string>;

  pull(
    from: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "pull(address,uint256)"(
    from: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    gem(overrides?: CallOverrides): Promise<string>;

    "gem()"(overrides?: CallOverrides): Promise<string>;

    pull(
      from: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "pull(address,uint256)"(
      from: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    gem(overrides?: CallOverrides): Promise<BigNumber>;

    "gem()"(overrides?: CallOverrides): Promise<BigNumber>;

    pull(
      from: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "pull(address,uint256)"(
      from: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    gem(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "gem()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pull(
      from: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "pull(address,uint256)"(
      from: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}