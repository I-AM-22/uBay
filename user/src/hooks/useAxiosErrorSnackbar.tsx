import { AxiosError } from "axios";
import { useSnackbarContext } from "context/snackbarContext";
import { useTranslation } from "react-i18next";
import { parseBackendError } from "utils/apiHelpers";
const useAxiosErrorSnackbar = () => {
  const snackbar = useSnackbarContext();
  const { t } = useTranslation();
  return function (err: unknown) {
    let message = t("error.somethingWentWrong");
    if (err instanceof AxiosError<any, any>) {
      message = parseBackendError(err) ?? message;
    }
    snackbar({ message, severity: "error" });
  };
};
export default useAxiosErrorSnackbar;
