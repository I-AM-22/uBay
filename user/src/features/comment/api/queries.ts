import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import API from "./api";
import { CommentAllParams } from "./type";

export const keys = createQueryKeys("comment", {
  all: (params: CommentAllParams) => ({
    queryKey: [params],
    async queryFn(context) {
      const pageParam = context?.pageParam ?? 1;
      params.page = pageParam;
      const data = await API.getAll(params);
      return data;
    },
  }),
  detail: (id: string) => ({
    queryFn: () => API.get(id),
    queryKey: [id],
  }),
});
export const queries = {
  useInfinite: (params: CommentAllParams) =>
    useInfiniteQuery({ ...keys.all(params), enabled: !!params.postId }),
  useDetails: (id: string) => useQuery(keys.detail(id)),
  usePost: () => useMutation(API.post),
  useEdit: () => useMutation(API.edit),
  useRemove: () => useMutation(API.remove),
};
