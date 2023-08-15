import { zodResolver } from "@hookform/resolvers/zod";
import PersonIcon from "@mui/icons-material/Person";
import { InputAdornment, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useQueryClient } from "@tanstack/react-query";
import TextField from "components/Inputs/TextField";
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
import { UserSignupBody } from "../../api/type";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import signupSchema, { signupDefault } from "./validation";
export const SignupForm = () => {
  const { control, handleSubmit, setError } = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: signupDefault,
  });
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const signup = authQueries.useSignup();
  const queryClient = useQueryClient();

  const { t } = useTranslation("auth", { keyPrefix: "signup" });
  const onSubmit = async (body: UserSignupBody) => {
    signup.mutate(body, {
      onSuccess: (data) => {
        storage.setToken(data.token);
        queryClient.setQueryData(queryStore.account.profile.queryKey, data.user);
        navigate("/");
      },
      onError: parseResponseError({ setFormError: setError, snackbar }),
    });
  };
  return (
    <Stack component={"form"} onSubmit={handleSubmit(onSubmit)} flex={1}>
      <Stack gap={8} height={"100%"}>
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
          flex={1}
          sx={{
            width: "80%",
            mx: "auto",
          }}
        >
          <TextField
            name={"name"}
            control={control}
            label={t("name")}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          <EmailInput control={control} name="email" />
          <PasswordInput control={control} name="password" />
          <PasswordInput control={control} name="passwordConfirm" label={t("passwordConfirm")} />
          <Submit
            sx={{ px: 5, py: 1.5, mx: { xs: 0, md: "auto" } }}
            isSubmitting={signup.isLoading}
          >{t`submit`}</Submit>
        </Stack>
        <Typography textAlign={"center"}>
          {t("aMember")} <RouterLink to="/login">{t("login")}</RouterLink>
        </Typography>
      </Stack>
    </Stack>
  );
};
export default SignupForm;
