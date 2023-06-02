import { useSnackbar } from "context/snackbarContext";
import { ReactNode } from "react";
const useSuccessSnackbar = () => {
  const snackbar = useSnackbar();
  return function (message: ReactNode) {
    snackbar({ message, severity: "success" });
  };
};
export default useSuccessSnackbar;
