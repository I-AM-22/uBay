import { InfiniteData } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { PAGE_SIZE } from "constants/apiList";
import { useSnackbar } from "context/snackbarContext";
import i18n from "lib/i18next";
import { UseFormSetError } from "react-hook-form";
import { APIList, APIListParams, ResponseError } from "types/api";

export function isBackendError(err: unknown): err is AxiosError<ResponseError> {
  return err instanceof AxiosError;
}

type Feedbacks = {
  setError?: UseFormSetError<any>;
  snackbar?: ReturnType<typeof useSnackbar>;
};
export function parseResponseError(feedbacks?: Feedbacks) {
  return (err: unknown) => {
    if (!isBackendError(err)) throw new Error("Unknown Response Error");
    const data = err.response?.data;
    switch (data?.type) {
      case "default":
        feedbacks?.snackbar?.({
          message: data.message ?? i18n.t("error.somethingWentWrong"),
          severity: "error",
        });
        break;
      case "form":
        data.errors.forEach((error) =>
          feedbacks?.setError?.(`${error.path.join(".")}`, { message: error.message })
        );
        break;
      default:
        feedbacks?.snackbar?.({
          message: i18n.t("error.somethingWentWrong"),
          severity: "error",
        });
    }
    return err;
  };
}
export function paginateParams(params: APIListParams) {
  return { limit: PAGE_SIZE, ...params, page: (params.page ?? 0) + 1 };
}
type Data<T> = InfiniteData<APIList<T>> | undefined;
export function getPage<T>(data: Data<T>, pageNumber: number) {
  return data?.pages[(data?.pageParams[pageNumber] as any) ?? 0]?.data ?? [];
}
