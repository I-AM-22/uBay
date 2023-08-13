import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import API from "./api";

export const keys = createQueryKeys("discount", {
  byProduct: (productId: string) => ({
    queryFn: () => API.getByProduct(productId),
    queryKey: [productId],
  }),
});
export const queries = {
  useByProduct: (productId: string) =>
    useInfiniteQuery({ ...keys.byProduct(productId), enabled: !!productId }),

  useCreate: () => useMutation(API.create),
  useRemove: () => useMutation(API.remove),
};
