import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { Button, Dialog, DialogActions, DialogContent, Stack } from "@mui/material";
import Loading from "components/feedback/Loading";
import DialogTitle from "components/forms/DialogTitle";
import { useSnackbar } from "context/snackbarContext";
import { accountQueries } from "features/account";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { parseResponseError } from "utils/apiHelpers";
import { storage } from "utils/storage";
type Props = {};
export const ProfileRemoveDialog: FC<Props> = ({}) => {
  const { t } = useTranslation("account", { keyPrefix: "profileRemove" });
  const remove = accountQueries.useRemove();
  const snackbar = useSnackbar();
  const navigate = useNavigate();
  const onSubmit = async () => {
    remove.mutate(undefined, {
      onSuccess: () => {
        storage.clearToken();
        navigate("/registration");
      },
      onError: parseResponseError({ snackbar }),
    });
  };
  const handleCancel = () => {
    navigate("..");
  };
  return (
    <Dialog open={true} onClose={handleCancel} maxWidth="xs">
      <Stack width={500} maxWidth="100%">
        <DialogTitle onClose={handleCancel}>{t("title")}</DialogTitle>
        <DialogContent>
          {t("subtitle")}
          {remove.isLoading && <Loading size={40} sx={{ my: 1 }} />}
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            ".MuiButton-root": {
              p: "4px 10px !important",
            },
          }}
        >
          <Button
            onClick={onSubmit}
            disabled={remove.isLoading}
            sx={{
              bgcolor: "error.main",
              color: "white",
              "&:hover": {
                bgcolor: "error.main",
                color: "white",
              },
            }}
            endIcon={<SentimentVeryDissatisfiedIcon sx={{ color: "white" }} />}
          >
            {t("submit")}
          </Button>
          <Button
            onClick={handleCancel}
            sx={{
              color: "primary.main",
              bgcolor: "primary.100",
              border: "1px solid",
              borderColor: "primary.main",
              "&:hover": {
                bgcolor: "primary.main",
                color: "white",
                svg: { color: "white" },
              },
            }}
            endIcon={<SentimentVerySatisfiedIcon sx={{ color: "primary.main" }} />}
          >
            {t("cancel")}
          </Button>
        </DialogActions>
      </Stack>
    </Dialog>
  );
};
