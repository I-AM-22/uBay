import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useMutation } from "@tanstack/react-query";
import API from "./api";

export const keys = createQueryKeys("payment", {});
export const queries = {
  useBuy: () => useMutation(API.buy),
};
