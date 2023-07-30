import { mergeQueryKeys } from "@lukemorales/query-key-factory";
import { accountKeys } from "features/account";
import { categoryKeys } from "features/category";
import { commentKeys } from "features/comment";
import { postKeys } from "features/post";
import { storeKeys } from "features/store";
export const queryStore = mergeQueryKeys(
  accountKeys,
  postKeys,
  categoryKeys,
  commentKeys,
  storeKeys
);
