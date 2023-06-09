import { zodResolver } from "@hookform/resolvers/zod";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { InputAdornment, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useQueryClient } from "@tanstack/react-query";
import TextField from "components/Inputs/TextField";
import Submit from "components/buttons/Submit";
import { useSnackbar } from "context/snackbarContext";
import { authQueries } from "features/auth";
import { queryStore } from "features/shared";
import z from "lib/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { parseResponseError } from "utils/apiHelpers";
import { storage } from "utils/storage";
import { UserResetPasswordBody } from "../../api/type";
import PasswordInput from "../PasswordInput";
import resetPasswordSchema, { resetPasswordDefault } from "./validation";
export const ResetPasswordForm = ({ navToOnSuccess = "/" }: { navToOnSuccess?: string }) => {
  const { control, handleSubmit, setError } = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: resetPasswordDefault,
  });
  const navigate = useNavigate();
  const resetPassword = authQueries.useResetPassword();
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();
  const { t } = useTranslation("auth", { keyPrefix: "resetPassword" });
  const onSubmit = async (body: UserResetPasswordBody) => {
    resetPassword.mutate(body, {
      onSuccess: (data) => {
        storage.setToken(data.token);
        queryClient.setQueryData(queryStore.account.profile.queryKey, data.user);
        navigate(navToOnSuccess);
      },
      onError: parseResponseError({ setFormError: setError, snackbar }),
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={6} height={"100%"}>
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
