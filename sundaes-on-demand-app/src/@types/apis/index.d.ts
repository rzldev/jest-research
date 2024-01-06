import { Data } from "../models";

export type OnSuccess = (data: Data) => void
export type OnError = (errorMessage: string) => void;