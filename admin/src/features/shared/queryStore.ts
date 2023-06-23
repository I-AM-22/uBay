import { mergeQueryKeys } from "@lukemorales/query-key-factory";
import { adminKeys } from "features/admin";
import { categoryKeys } from "features/category";
import { cityKeys } from "features/city";
import { userKeys } from "features/user";
import { warehouseKeys } from "features/warehouse";

export const queryStore = mergeQueryKeys(
  categoryKeys,
  userKeys,
  adminKeys,
  cityKeys,
  warehouseKeys
);
