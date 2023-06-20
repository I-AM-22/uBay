import LogoutOutlined from "@mui/icons-material/LogoutOutlined";
import { Button, Dialog, DialogActions, DialogContent, Stack } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import DialogTitle from "components/forms/DialogTitle";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { storage } from "utils/storage";
export const Logout: FC<{}> = ({}) => {
  const { t } = useTranslation("account", { keyPrefix: "logout" });
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const onSubmit = async () => {
    storage.clearToken();
    queryClient.removeQueries([]);
    navigate("/registration");
  };
  const handleCancel = () => {
    navigate("/settings");
  };
  return (
    <Dialog open={true} onClose={handleCancel} maxWidth="xs">
      <Stack width={500} maxWidth="100%">
        <DialogTitle onClose={handleCancel}>{t("title")}</DialogTitle>
        <DialogContent>{t("subtitle")}</DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
          }}
        >
          <Button
            onClick={onSubmit}
            sx={{
              bgcolor: "error.main",
              color: "white",
              "&:hover": {
                bgcolor: "error.main",
                color: "white",
              },
            }}
            endIcon={<LogoutOutlined sx={{ color: "white" }} />}
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
              },
            }}
          >
            {t("cancel")}
          </Button>
        </DialogActions>
      </Stack>
    </Dialog>
  );
};
