import { AlertTitle, Slide, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { FC, ReactNode } from "react";

export type Props = {
  open: boolean;
  onClose: () => void;
  message: ReactNode;
  severity: AlertSeverity;
  autoHideDuration?: number;
};
export type AlertSeverity = "error" | "warning" | "info" | "success";

const SnackbarComponent: FC<Props> = ({
  open,
  onClose,
  severity,
  message,
  autoHideDuration = 3000,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ horizontal: "left", vertical: "top" }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      TransitionComponent={Slide}
    >
      <Alert sx={{ bgcolor: "white" }} severity={severity} elevation={5} onClose={onClose}>
        <AlertTitle>
          <Typography px={1}>{message}</Typography>
        </AlertTitle>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
