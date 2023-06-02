import { AlertSeverity } from "components/feedback/Snackbar";
import React, { ReactNode, useContext } from "react";

export type SnackbarProps = {
  severity: AlertSeverity;
  message: ReactNode;
};
export type SnackBarContextValue = {
  setSnackbarProps: ({ severity, message }: SnackbarProps) => void;
  handleOpenSnackbar: () => void;
};
export const initialSnackbarState = {
  setSnackbarProps: () => {},
  handleOpenSnackbar: () => {},
};
export const SnackbarContext = React.createContext<SnackBarContextValue>(initialSnackbarState);

export const useSnackbar = () => {
  const { setSnackbarProps, handleOpenSnackbar } = useContext(SnackbarContext);
  const showSnackbar = (props: SnackbarProps) => {
    setSnackbarProps(props);
    handleOpenSnackbar();
  };
  return showSnackbar;
};
