import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import API from "./api";

export const keys = createQueryKeys("category", {
  select: {
    queryFn: () => API.select(),
    queryKey: [""],
  },
});
export const queries = {
  useSelect: () => useQuery(keys.select),
};
