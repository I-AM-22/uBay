import { mergeQueryKeys } from "@lukemorales/query-key-factory";
import { accountKeys } from "features/account";
export const queryStore = mergeQueryKeys(accountKeys);
