import { AlertSeverity } from "components/feedback/Snackbar";
import React, { useContext } from "react";
import { ReactNode } from "react";

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

export const useSnackbarContext = () => {
  const { setSnackbarProps, handleOpenSnackbar } = useContext(SnackbarContext);
  const showSnackbar = (props: SnackbarProps) => {
    setSnackbarProps(props);
    handleOpenSnackbar();
  };
  return showSnackbar;
};
