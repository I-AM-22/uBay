import { mergeQueryKeys } from "@lukemorales/query-key-factory";
import { accountKeys } from "features/account";
import { categoryKeys } from "features/category";
import { postKeys } from "features/post";
export const queryStore = mergeQueryKeys(accountKeys, postKeys, categoryKeys);
