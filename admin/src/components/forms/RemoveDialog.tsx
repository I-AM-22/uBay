import { DialogContent } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { Stack } from "@mui/system";
import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import Loading from "../feedback/Loading";
import DialogTitle from "./DialogTitle";
type Props = {
  children: ReactNode;
  open: boolean;
  isLoading: boolean;
  handleCancel: () => void;
  handleRemove: () => void;
};
const RemoveDialog: FC<Props> = ({ handleCancel, handleRemove, open, children, isLoading }) => {
  const { t } = useTranslation();
  return (
    <form>
      <Dialog open={open} onClose={handleCancel}>
        <Stack width={500} maxWidth="100%">
          <DialogTitle onClose={handleCancel}>{children}</DialogTitle>
          <DialogContent>{isLoading && <Loading />}</DialogContent>
          <DialogActions>
            <Button
              onClick={handleCancel}
              sx={{
                color: "primary.main",
                bgcolor: "white",
                border: "1px solid",
                borderColor: "primary.main",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white",
                },
              }}
            >
              {t("cancel")}
            </Button>
            <Button
              onClick={handleRemove}
              disabled={isLoading}
              sx={{
                bgcolor: "error.main",
                color: "white",
                "&:hover": {
                  bgcolor: "error.main",
                  color: "white",
                },
              }}
            >
              {t("remove")}
            </Button>
          </DialogActions>
        </Stack>
      </Dialog>
    </form>
  );
};
export default RemoveDialog;
