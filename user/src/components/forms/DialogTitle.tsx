import CloseIcon from "@mui/icons-material/Close";
import { DialogTitle as MuiDialogTitle, DialogTitleProps, IconButton } from "@mui/material";
import { FC, forwardRef } from "react";
type Props = { onClose?: () => void } & DialogTitleProps;
const DialogTitle: FC<Props> = forwardRef(function fr({ children, onClose, ...props }: Props, ref) {
  return (
    <MuiDialogTitle sx={{ m: 0, p: 2 }} {...props} ref={ref}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
export default DialogTitle;
