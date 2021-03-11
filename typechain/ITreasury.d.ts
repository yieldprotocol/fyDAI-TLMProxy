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

interface ITreasuryInterface extends ethers.utils.Interface {
  functions: {
    "chai()": FunctionFragment;
    "dai()": FunctionFragment;
    "daiJoin()": FunctionFragment;
    "debt()": FunctionFragment;
    "live()": FunctionFragment;
    "pot()": FunctionFragment;
    "pullChai(address,uint256)": FunctionFragment;
    "pullDai(address,uint256)": FunctionFragment;
    "pullWeth(address,uint256)": FunctionFragment;
    "pushChai(address,uint256)": FunctionFragment;
    "pushDai(address,uint256)": FunctionFragment;
    "pushWeth(address,uint256)": FunctionFragment;
    "savings()": FunctionFragment;
    "shutdown()": FunctionFragment;
    "vat()": FunctionFragment;
    "weth()": FunctionFragment;
    "wethJoin()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "chai", values?: undefined): string;
  encodeFunctionData(functionFragment: "dai", values?: undefined): string;
  encodeFunctionData(functionFragment: "daiJoin", values?: undefined): string;
  encodeFunctionData(functionFragment: "debt", values?: undefined): string;
  encodeFunctionData(functionFragment: "live", values?: undefined): string;
  encodeFunctionData(functionFragment: "pot", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pullChai",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pullDai",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pullWeth",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pushChai",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pushDai",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pushWeth",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "savings", values?: undefined): string;
  encodeFunctionData(functionFragment: "shutdown", values?: undefined): string;
  encodeFunctionData(functionFragment: "vat", values?: undefined): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;
  encodeFunctionData(functionFragment: "wethJoin", values?: undefined): string;

  decodeFunctionResult(functionFragment: "chai", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dai", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "daiJoin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "debt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pullChai", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pullDai", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pullWeth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pushChai", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pushDai", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pushWeth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "savings", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shutdown", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vat", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wethJoin", data: BytesLike): Result;

  events: {};
}

export class ITreasury extends Contract {
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

  interface: ITreasuryInterface;

  functions: {
    chai(overrides?: CallOverrides): Promise<[string]>;

    "chai()"(overrides?: CallOverrides): Promise<[string]>;

    dai(overrides?: CallOverrides): Promise<[string]>;

    "dai()"(overrides?: CallOverrides): Promise<[string]>;

    daiJoin(overrides?: CallOverrides): Promise<[string]>;

    "daiJoin()"(overrides?: CallOverrides): Promise<[string]>;

    debt(overrides?: CallOverrides): Promise<[BigNumber]>;

    "debt()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    live(overrides?: CallOverrides): Promise<[boolean]>;

    "live()"(overrides?: CallOverrides): Promise<[boolean]>;

    pot(overrides?: CallOverrides): Promise<[string]>;

    "pot()"(overrides?: CallOverrides): Promise<[string]>;

    pullChai(
      user: string,
      chai: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "pullChai(address,uint256)"(
      user: string,
      chai: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    pullDai(
      user: string,
      dai: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "pullDai(address,uint256)"(
      user: string,
      dai: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    pullWeth(
      to: string,
      weth: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "pullWeth(address,uint256)"(
      to: string,
      weth: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    pushChai(
      user: string,
      chai: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "pushChai(address,uint256)"(
      user: string,
      chai: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    pushDai(
      user: string,
      dai: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "pushDai(address,uint256)"(
      user: string,
      dai: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    pushWeth(
      to: string,
      weth: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "pushWeth(address,uint256)"(
      to: string,
      weth: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    savings(overrides?: CallOverrides): Promise<[BigNumber]>;

    "savings()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    shutdown(overrides?: Overrides): Promise<ContractTransaction>;

    "shutdown()"(overrides?: Overrides): Promise<ContractTransaction>;

    vat(overrides?: CallOverrides): Promise<[string]>;

    "vat()"(overrides?: CallOverrides): Promise<[string]>;

    weth(overrides?: CallOverrides): Promise<[string]>;

    "weth()"(overrides?: CallOverrides): Promise<[string]>;

    wethJoin(overrides?: CallOverrides): Promise<[string]>;

    "wethJoin()"(overrides?: CallOverrides): Promise<[string]>;
  };

  chai(overrides?: CallOverrides): Promise<string>;

  "chai()"(overrides?: CallOverrides): Promise<string>;

  dai(overrides?: CallOverrides): Promise<string>;

  "dai()"(overrides?: CallOverrides): Promise<string>;

  daiJoin(overrides?: CallOverrides): Promise<string>;

  "daiJoin()"(overrides?: CallOverrides): Promise<string>;

  debt(overrides?: CallOverrides): Promise<BigNumber>;

  "debt()"(overrides?: CallOverrides): Promise<BigNumber>;

  live(overrides?: CallOverrides): Promise<boolean>;

  "live()"(overrides?: CallOverrides): Promise<boolean>;

  pot(overrides?: CallOverrides): Promise<string>;

  "pot()"(overrides?: CallOverrides): Promise<string>;

  pullChai(
    user: string,
    chai: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "pullChai(address,uint256)"(
    user: string,
    chai: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  pullDai(
    user: string,
    dai: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "pullDai(address,uint256)"(
    user: string,
    dai: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  pullWeth(
    to: string,
    weth: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "pullWeth(address,uint256)"(
    to: string,
    weth: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  pushChai(
    user: string,
    chai: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "pushChai(address,uint256)"(
    user: string,
    chai: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  pushDai(
    user: string,
    dai: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "pushDai(address,uint256)"(
    user: string,
    dai: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  pushWeth(
    to: string,
    weth: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "pushWeth(address,uint256)"(
    to: string,
    weth: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  savings(overrides?: CallOverrides): Promise<BigNumber>;

  "savings()"(overrides?: CallOverrides): Promise<BigNumber>;

  shutdown(overrides?: Overrides): Promise<ContractTransaction>;

  "shutdown()"(overrides?: Overrides): Promise<ContractTransaction>;

  vat(overrides?: CallOverrides): Promise<string>;

  "vat()"(overrides?: CallOverrides): Promise<string>;

  weth(overrides?: CallOverrides): Promise<string>;

  "weth()"(overrides?: CallOverrides): Promise<string>;

  wethJoin(overrides?: CallOverrides): Promise<string>;

  "wethJoin()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    chai(overrides?: CallOverrides): Promise<string>;

    "chai()"(overrides?: CallOverrides): Promise<string>;

    dai(overrides?: CallOverrides): Promise<string>;

    "dai()"(overrides?: CallOverrides): Promise<string>;

    daiJoin(overrides?: CallOverrides): Promise<string>;

    "daiJoin()"(overrides?: CallOverrides): Promise<string>;

    debt(overrides?: CallOverrides): Promise<BigNumber>;

    "debt()"(overrides?: CallOverrides): Promise<BigNumber>;

    live(overrides?: CallOverrides): Promise<boolean>;

    "live()"(overrides?: CallOverrides): Promise<boolean>;

    pot(overrides?: CallOverrides): Promise<string>;

    "pot()"(overrides?: CallOverrides): Promise<string>;

    pullChai(
      user: string,
      chai: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "pullChai(address,uint256)"(
      user: string,
      chai: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pullDai(
      user: string,
      dai: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "pullDai(address,uint256)"(
      user: string,
      dai: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pullWeth(
      to: string,
      weth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "pullWeth(address,uint256)"(
      to: string,
      weth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pushChai(
      user: string,
      chai: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "pushChai(address,uint256)"(
      user: string,
      chai: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pushDai(
      user: string,
      dai: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "pushDai(address,uint256)"(
      user: string,
      dai: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pushWeth(
      to: string,
      weth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "pushWeth(address,uint256)"(
      to: string,
      weth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    savings(overrides?: CallOverrides): Promise<BigNumber>;

    "savings()"(overrides?: CallOverrides): Promise<BigNumber>;

    shutdown(overrides?: CallOverrides): Promise<void>;

    "shutdown()"(overrides?: CallOverrides): Promise<void>;

    vat(overrides?: CallOverrides): Promise<string>;

    "vat()"(overrides?: CallOverrides): Promise<string>;

    weth(overrides?: CallOverrides): Promise<string>;

    "weth()"(overrides?: CallOverrides): Promise<string>;

    wethJoin(overrides?: CallOverrides): Promise<string>;

    "wethJoin()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    chai(overrides?: CallOverrides): Promise<BigNumber>;

    "chai()"(overrides?: CallOverrides): Promise<BigNumber>;

    dai(overrides?: CallOverrides): Promise<BigNumber>;

    "dai()"(overrides?: CallOverrides): Promise<BigNumber>;

    daiJoin(overrides?: CallOverrides): Promise<BigNumber>;

    "daiJoin()"(overrides?: CallOverrides): Promise<BigNumber>;

    debt(overrides?: CallOverrides): Promise<BigNumber>;

    "debt()"(overrides?: CallOverrides): Promise<BigNumber>;

    live(overrides?: CallOverrides): Promise<BigNumber>;

    "live()"(overrides?: CallOverrides): Promise<BigNumber>;

    pot(overrides?: CallOverrides): Promise<BigNumber>;

    "pot()"(overrides?: CallOverrides): Promise<BigNumber>;

    pullChai(
      user: string,
      chai: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "pullChai(address,uint256)"(
      user: string,
      chai: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    pullDai(
      user: string,
      dai: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "pullDai(address,uint256)"(
      user: string,
      dai: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    pullWeth(
      to: string,
      weth: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "pullWeth(address,uint256)"(
      to: string,
      weth: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    pushChai(
      user: string,
      chai: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "pushChai(address,uint256)"(
      user: string,
      chai: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    pushDai(
      user: string,
      dai: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "pushDai(address,uint256)"(
      user: string,
      dai: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    pushWeth(
      to: string,
      weth: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "pushWeth(address,uint256)"(
      to: string,
      weth: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    savings(overrides?: CallOverrides): Promise<BigNumber>;

    "savings()"(overrides?: CallOverrides): Promise<BigNumber>;

    shutdown(overrides?: Overrides): Promise<BigNumber>;

    "shutdown()"(overrides?: Overrides): Promise<BigNumber>;

    vat(overrides?: CallOverrides): Promise<BigNumber>;

    "vat()"(overrides?: CallOverrides): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;

    "weth()"(overrides?: CallOverrides): Promise<BigNumber>;

    wethJoin(overrides?: CallOverrides): Promise<BigNumber>;

    "wethJoin()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    chai(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "chai()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dai(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "dai()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    daiJoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "daiJoin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    debt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "debt()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    live(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "live()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pot()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pullChai(
      user: string,
      chai: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "pullChai(address,uint256)"(
      user: string,
      chai: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    pullDai(
      user: string,
      dai: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "pullDai(address,uint256)"(
      user: string,
      dai: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    pullWeth(
      to: string,
      weth: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "pullWeth(address,uint256)"(
      to: string,
      weth: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    pushChai(
      user: string,
      chai: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "pushChai(address,uint256)"(
      user: string,
      chai: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    pushDai(
      user: string,
      dai: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "pushDai(address,uint256)"(
      user: string,
      dai: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    pushWeth(
      to: string,
      weth: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "pushWeth(address,uint256)"(
      to: string,
      weth: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    savings(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "savings()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    shutdown(overrides?: Overrides): Promise<PopulatedTransaction>;

    "shutdown()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    vat(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vat()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "weth()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wethJoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "wethJoin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}