import { Slide, Typography } from "@mui/material";
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
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      TransitionComponent={Slide}
      sx={{ ".MuiPaper-root": { px: 0 }, ".MuiSvgIcon-root": { color: "inherit" } }}
    >
      <Alert sx={{ bgcolor: "white" }} severity={severity} elevation={5} onClose={onClose}>
        <Typography px={2}>{message}</Typography>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
