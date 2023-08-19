import { mergeQueryKeys } from "@lukemorales/query-key-factory";
import { accountKeys } from "features/account";
import { categoryKeys } from "features/category";
import { chatKeys } from "features/chat";
import { commentKeys } from "features/comment";
import { discountKeys } from "features/discount";
import { postKeys } from "features/post";
import { storeKeys } from "features/store";
export const queryStore = mergeQueryKeys(
  accountKeys,
  postKeys,
  categoryKeys,
  commentKeys,
  storeKeys,
  discountKeys,
  chatKeys
);
