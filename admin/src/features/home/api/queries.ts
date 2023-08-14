import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import API from "./api";
export const keys = createQueryKeys("employee", {
  statics: {
    queryFn: () => API.getStatics(),
    queryKey: [""],
  },
});
export const queries = {
  useStatics: () => useQuery(keys.statics),
};
