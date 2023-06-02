import { mergeQueryKeys } from "@lukemorales/query-key-factory";
import { categoryKeys } from "features/category";
export const queryStore = mergeQueryKeys(categoryKeys);
