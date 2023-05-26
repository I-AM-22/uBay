import { zodResolver } from "@hookform/resolvers/zod";
import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Submit from "components/buttons/Submit";
import RouterLink from "components/links/RouterLink";
import { useProfile } from "context/profileContext";
import { useSnackbar } from "context/snackbarContext";
import { authQueries } from "features/auth";
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
  const [, setProfile] = useProfile();
  const { t } = useTranslation("auth", { keyPrefix: "login" });
  const onSubmit = async (body: UserLoginBody) => {
    login.mutate(body, {
      onSuccess: (data) => {
        storage.setToken(data.token);
        setProfile(data.data.user);
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
          <EmailInput control={control} name="email" />
          <PasswordInput sx={{ mb: 5 }} control={control} name="password" />
          <Submit
            sx={{ px: 5, py: 1.5, mt: "auto" }}
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
    </form>
  );
};
