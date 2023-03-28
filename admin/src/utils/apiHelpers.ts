import { InfiniteData } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Page, Pagination } from "../types/api";

export function getNextPageParam<T>(lastPage: Page<T>, allPages: Page<T>[]) {
  return allPages.length < lastPage.data.totalPages ? lastPage.pageParam + 1 : undefined;
}
export function getPreviousPageParam<T>(lastPage: Page<T>, allPages: Page<T>[]) {
  return allPages.length > 0 ? lastPage.pageParam - 1 : undefined;
}

export function parseBackendError(err: AxiosError<any, any>) {
  let message: string | undefined;
  const data = err.response?.data;
  if (data) message = `${data.errorMessage}`;
  return message;
}
type Data<T> =
  | InfiniteData<{
      data: Pagination<T>;
      pageParam: any;
    }>
  | undefined;
export function getPage<T>(data: Data<T>, pageNumber: number) {
  return data?.pages[(data?.pageParams[pageNumber] as any) ?? 0]?.data.data ?? [];
}
