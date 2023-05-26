import { zodResolver } from "@hookform/resolvers/zod";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { InputAdornment, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import TextField from "components/Inputs/TextField";
import Submit from "components/buttons/Submit";
import { useSnackbar } from "context/snackbarContext";
import { authQueries } from "features/auth";
import z from "lib/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { parseResponseError } from "utils/apiHelpers";
import { storage } from "utils/storage";
import { UserResetPasswordBody } from "../../api/type";
import PasswordInput from "../PasswordInput";
import resetPasswordSchema, { resetPasswordDefault } from "./validation";
export const ResetPasswordForm = () => {
  const { control, handleSubmit, setError } = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: resetPasswordDefault,
  });
  const navigate = useNavigate();
  const resetPassword = authQueries.useResetPassword();
  const snackbar = useSnackbar();
  const { t } = useTranslation("auth", { keyPrefix: "resetPassword" });
  const onSubmit = async (data: UserResetPasswordBody) => {
    resetPassword.mutate(data, {
      onSuccess: (response) => {
        navigate("/reset-password");
        storage.setToken(response.token);
        storage.setUser(response.data.user);
        navigate("/");
      },
      onError: (err) => parseResponseError(err, { setFormError: setError, snackbar }),
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={3} height={"100%"}>
        <Stack gap={1}>
          <Typography color="primary.800" variant="h4" textAlign={"center"}>
            {t("title")}
          </Typography>
          <Typography variant="subtitle1" textAlign={"center"}>
            {t("subtitle")}
          </Typography>
        </Stack>
        <Stack
          gap={2}
          sx={{
            width: "80%",
            mx: "auto",
          }}
        >
          <TextField
            name={"token"}
            control={control}
            label={t("token")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <QrCodeIcon />
                </InputAdornment>
              ),
            }}
          />
          <PasswordInput control={control} name="password" label={t("password")} />
          <Submit
            sx={{ mt: { xs: 0, md: 5 }, px: 5, py: 1.5 }}
            isSubmitting={resetPassword.isLoading}
          >{t`submit`}</Submit>
        </Stack>
      </Stack>
    </form>
  );
};
