import { AxiosError } from "axios";
import { useSnackbar } from "context/snackbarContext";
import i18n from "lib/i18next";
import { UseFormSetError } from "react-hook-form";
import { ResponseError } from "types/api";

export function isBackendError(err: unknown): err is AxiosError<ResponseError> {
  return err instanceof AxiosError<ResponseError>;
}

type Feedbacks = {
  setFormError?: UseFormSetError<any>;
  snackbar?: ReturnType<typeof useSnackbar>;
};
export function parseResponseError(err: unknown, feedbacks?: Feedbacks) {
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
        feedbacks?.setFormError?.(`${error.path.join(".")}`, { message: error.message })
      );
      break;
    default:
      feedbacks?.snackbar?.({
        message: i18n.t("error.somethingWentWrong"),
        severity: "error",
      });
  }
  return err;
}
