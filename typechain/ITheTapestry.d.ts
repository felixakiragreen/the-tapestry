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
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ITheTapestryInterface extends ethers.utils.Interface {
  functions: {
    "isChapterComplete(uint256)": FunctionFragment;
    "linesByWeaver(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "isChapterComplete",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "linesByWeaver",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "isChapterComplete",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "linesByWeaver",
    data: BytesLike
  ): Result;

  events: {};
}

export class ITheTapestry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ITheTapestryInterface;

  functions: {
    isChapterComplete(
      chapterIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    linesByWeaver(
      weaver: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;
  };

  isChapterComplete(
    chapterIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  linesByWeaver(
    weaver: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  callStatic: {
    isChapterComplete(
      chapterIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    linesByWeaver(
      weaver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    isChapterComplete(
      chapterIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    linesByWeaver(
      weaver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isChapterComplete(
      chapterIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    linesByWeaver(
      weaver: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
