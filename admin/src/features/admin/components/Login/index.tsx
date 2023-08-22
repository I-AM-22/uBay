import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Submit from "components/buttons/Submit";
import { useSnackbar } from "context/snackbarContext";
import { AdminLoginBody, adminQueries } from "features/admin";
import { EmailInput, PasswordInput } from "features/shared";
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

  const { t } = useTranslation("admin");
  const navigate = useNavigate();
  const login = adminQueries.useLogin();
  const snackbar = useSnackbar();
  const onSubmit = async (data: AdminLoginBody) => {
    login.mutate(data, {
      onSuccess: (data) => {
        storage.setToken(data.token);
        storage.setRole(data.user.role);
        navigate("/");
      },
      onError: parseResponseError({ setError: setError, snackbar }),
    });
  };
  return (
    <Paper
      onSubmit={handleSubmit(onSubmit)}
      elevation={2}
      component={Stack}
      gap={5}
      sx={{
        pt: "40px",
        px: { xs: 1, sm: "50px" },
        pb: "32px",
      }}
    >
      <Typography color="primary" variant="h5" textAlign={"center"}>
        {t("login.title")}
      </Typography>
      <Stack gap={2} component={"form"} width="80%" mx="auto">
        <EmailInput control={control} name="email" />
        <PasswordInput control={control} name="password" />
        <Box m="auto" width="fit-content">
          <Submit sx={{ px: 5 }} isSubmitting={login.isLoading}>{t`login.submit`}</Submit>
        </Box>
      </Stack>
    </Paper>
  );
};
export default LoginForm;
