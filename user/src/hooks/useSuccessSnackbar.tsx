import { useSnackbarContext } from "context/snackbarContext";
import { ReactNode } from "react";
const useSuccessSnackbar = () => {
  const snackbar = useSnackbarContext();
  return function (message: ReactNode) {
    snackbar({ message, severity: "success" });
  };
};
export default useSuccessSnackbar;
