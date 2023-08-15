import { accountQueries } from "..";

export function useIsMe(userId: string) {
  const query = accountQueries.useProfile();
  return query.data?._id === userId;
}
