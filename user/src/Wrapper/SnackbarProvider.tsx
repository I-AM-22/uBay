import SnackbarComponent from "components/feedback/Snackbar";
import { SnackbarContext, SnackbarProps } from "context/snackbarContext";
import { FC, ReactNode, useState } from "react";

export type Props = { children: ReactNode };
const SnackbarProvider: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [snackbarProps, setSnackbarProps] = useState<SnackbarProps>({
    severity: "error",
    message: "",
  });
  const HandleOpenSnackbar = () => {
    setOpen(true);
  };
  const HandleCloseSnackbar = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider
      value={{
        setSnackbarProps,
        handleOpenSnackbar: HandleOpenSnackbar,
      }}
    >
      {children}
      <SnackbarComponent
        key={JSON.stringify(snackbarProps)}
        open={open}
        onClose={HandleCloseSnackbar}
        {...snackbarProps}
      />
    </SnackbarContext.Provider>
  );
};
export default SnackbarProvider;
