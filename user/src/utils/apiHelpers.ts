import { AxiosError } from "axios";
import { useSnackbar } from "context/snackbarContext";
import i18n from "lib/i18next";
import { UseFormSetError } from "react-hook-form";
import { APIListParams, ResponseError } from "types/api";

export function isBackendError(err: unknown): err is AxiosError<ResponseError> {
  return err instanceof AxiosError;
}

type Feedbacks = {
  setFormError?: UseFormSetError<any>;
  snackbar?: ReturnType<typeof useSnackbar>;
};
export function parseResponseError(feedbacks: Feedbacks) {
  return (err: unknown) => {
    if (!isBackendError(err)) throw new Error("Unknown Response Error");
    const data = err.response?.data;
    switch (data?.type) {
      case "default":
        if (!feedbacks.snackbar)
          throw new Error('Backend error is "default" but didn\'t provide a snackbar');
        feedbacks.snackbar({
          message: data.message ?? i18n.t("error.somethingWentWrong"),
          severity: "error",
        });
        break;
      case "form":
        if (!feedbacks.setFormError)
          throw new Error('Backend error is "form" but didn\'t provide a setFormError');
        data.errors.forEach((error) =>
          feedbacks.setFormError?.(`${error.path.join(".")}`, { message: error.message })
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
export function paginateParams(params?: APIListParams) {
  return { limit: 10, ...params };
}
