import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import API from "./api";
import { PostAllParams } from "./type";

export const keys = createQueryKeys("post", {
  all: (params: PostAllParams) => ({
    queryFn: () => API.getAll(params),
    queryKey: [params],
  }),
  detail: (id: string) => ({
    queryFn: () => API.get(id),
    queryKey: [id],
  }),
});
export const queries = {
  useInfinite: (params: PostAllParams) => useInfiniteQuery(keys.all(params)),
  useDetails: (id: string) => useQuery(keys.detail(id)),
  usePost: () => useMutation(API.post),
};
