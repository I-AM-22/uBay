import { zodResolver } from "@hookform/resolvers/zod";
import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useQueryClient } from "@tanstack/react-query";
import Submit from "components/buttons/Submit";
import RouterLink from "components/links/RouterLink";
import { useSnackbar } from "context/snackbarContext";
import { authQueries } from "features/auth";
import { queryStore } from "features/shared";
import z from "lib/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { parseResponseError } from "utils/apiHelpers";
import { storage } from "utils/storage";
import { UserLoginBody } from "../../api/type";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import loginSchema, { loginDefault } from "./validation";
export const LoginForm = () => {
  const { control, handleSubmit, setError } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: loginDefault,
  });
  const navigate = useNavigate();
  const login = authQueries.useLogin();
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const { t } = useTranslation("auth", { keyPrefix: "login" });
  const onSubmit = async (body: UserLoginBody) => {
    login.mutate(body, {
      onSuccess: (data) => {
        storage.setToken(data.token);
        queryClient.setQueryData(queryStore.account.profile.queryKey, data.user);

        navigate("/");
      },
      onError: parseResponseError({ setFormError: setError, snackbar }),
    });
  };
  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} gap={3} height={"100%"}>
      <Stack gap={1} flex={0.5} alignItems={"center"}>
        <Typography color="primary.800" variant="h4" textAlign={"center"}>
          {t("title")}
        </Typography>
        <Typography variant="subtitle1" textAlign={"center"}>
          {t("subtitle")}
        </Typography>
      </Stack>
      <Stack
        gap={2}
        flex={2}
        sx={{
          width: "80%",
          mt: { xs: 4, md: 0 },
          mx: "auto",
        }}
      >
        <EmailInput control={control} name="email" />
        <PasswordInput control={control} name="password" />
        <Submit
          sx={{ px: 5, py: 1.5, mx: { xs: 0, md: "auto" } }}
          isSubmitting={login.isLoading}
        >{t`submit`}</Submit>
      </Stack>
      <Typography textAlign={"center"}>
        {t("notAMember")} <RouterLink to="/signup">{t("signup")}</RouterLink>
      </Typography>
      <Divider />
      <Typography textAlign={"center"}>
        {t("forgotPassword")} <RouterLink to="/forgot-password">{t("resetPassword")}</RouterLink>
      </Typography>
    </Stack>
  );
};
