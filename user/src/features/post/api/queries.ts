import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import API from "./api";
import { PostAllParams, PostMineParams } from "./type";

export const keys = createQueryKeys("post", {
  all: (params: PostAllParams) => ({
    queryFn: () => API.getAll(params),
    queryKey: [params],
  }),
  detail: (id: string) => ({
    queryFn: () => API.get(id),
    queryKey: [id],
  }),
  mine: (params: PostMineParams) => ({
    queryFn: () => API.mine(params),
    queryKey: [params],
  }),
});
export const queries = {
  useInfinite: (params: PostAllParams) => useInfiniteQuery(keys.all(params)),
  useDetails: (id: string) => useQuery(keys.detail(id)),
  useMine: (params: PostMineParams) => useQuery(keys.mine(params)),
  usePost: () => useMutation(API.post),
  useEdit: () => useMutation(API.edit),
  useRemove: () => useMutation(API.remove),
  useLike: () => useMutation(API.like),
  useUnlike: () => useMutation(API.unlike),
};
