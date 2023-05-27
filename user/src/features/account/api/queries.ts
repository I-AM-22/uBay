import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useMutation, useQuery } from "@tanstack/react-query";
import API from "./api";

export const keys = createQueryKeys("account", {
  profile: {
    queryFn: API.profile,
    queryKey: [""],
  },
});
export const queries = {
  useProfile: () => useQuery({ ...keys.profile, staleTime: Infinity, refetchOnWindowFocus: false }),

  useUpdate: () => useMutation(API.update),
  useDelete: () => useMutation(API.delete),
};
