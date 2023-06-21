import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import PasswordInput from "components/Inputs/PasswordInput";
import Submit from "components/buttons/Submit";
import { useSnackbar } from "context/snackbarContext";
import { AdminLoginBody, EmailInput, adminQueries } from "features/admin";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { parseResponseError } from "utils/apiHelpers";
import { storage } from "utils/storage";
import loginSchema, { loginDefault } from "./validation";
export const LoginForm = () => {
  const { control, handleSubmit, setError } = useForm<AdminLoginBody>({
    resolver: zodResolver(loginSchema),
    defaultValues: loginDefault,
  });

  const { t } = useTranslation("auth");
  const navigate = useNavigate();
  const login = adminQueries.useLogin();
  const snackbar = useSnackbar();
  const onSubmit = async (data: AdminLoginBody) => {
    login.mutate(data, {
      onSuccess: (data) => {
        storage.setToken(data.token);
        navigate("/");
      },
      onError: parseResponseError({ setError: setError, snackbar }),
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={8}>
        <Typography color="primary" variant="h4" textAlign={"center"}>
          {t("login.title")}
        </Typography>
        <Stack gap={2} width="80%" mx="auto">
          <EmailInput control={control} name="email" />
          <PasswordInput control={control} name="password" />
          <Box m="auto" width="fit-content">
            <Submit sx={{ px: 5 }} isSubmitting={login.isLoading}>{t`login.submit`}</Submit>
          </Box>
        </Stack>
      </Stack>
    </form>
  );
};
export default LoginForm;
