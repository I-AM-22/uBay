import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import API from "./api";
import { WarehouseAllParams } from "./type";
export const keys = createQueryKeys("warehouse", {
  all: (params: WarehouseAllParams) => ({
    queryFn: () => API.getAll(params),
    queryKey: [params],
  }),
  details: (id: string) => ({
    queryFn: () => API.get(id),
    queryKey: [id],
  }),
});
export const queries = {
  useAll: (params: WarehouseAllParams) => useInfiniteQuery(keys.all(params)),
  useDetails: (id: string) => useQuery({ ...keys.details(id), enabled: !!id }),

  useAdd: () => useMutation(API.add),
  useEdit: () => useMutation(API.edit),
  useRemove: () => useMutation(API.remove),
};
