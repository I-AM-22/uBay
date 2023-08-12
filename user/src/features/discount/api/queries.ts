import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useMutation, useQuery } from "@tanstack/react-query";
import API from "./api";

export const keys = createQueryKeys("discount", {
  byProduct: (productId: string) => ({
    queryFn: () => API.getByProduct(productId),
    queryKey: [productId],
  }),
});
export const queries = {
  useByProduct: (productId: string) => useQuery(keys.byProduct(productId)),

  useCreate: () => useMutation(API.create),
};
