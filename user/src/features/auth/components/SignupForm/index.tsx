import { zodResolver } from "@hookform/resolvers/zod";
import PersonIcon from "@mui/icons-material/Person";
import { InputAdornment, Typography, colors } from "@mui/material";
import { Stack } from "@mui/system";
import TextField from "components/Inputs/TextField";
import Submit from "components/buttons/Submit";
import RouterLink from "components/links/RouterLink";
import { useSnackbar } from "context/snackbarContext";
import { authQueries } from "features/auth";
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
  const { t } = useTranslation("auth", { keyPrefix: "signup" });
  const onSubmit = async (data: UserSignupBody) => {
    signup.mutate(data, {
      onSuccess: (data) => {
        storage.setToken(data.token);
        navigate("/");
      },
      onError: (err) => parseResponseError(err, { setFormError: setError, snackbar }),
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          sx={{
            width: "80%",
            mx: "auto",
            ".MuiOutlinedInput-notchedOutline": {
              background: "white",
              borderColor: { xs: colors.grey["300"] },
            },
            ".MuiInputBase-input, .MuiInputAdornment-root": {
              zIndex: 1,
            },
            ".MuiFormLabel-root": {
              zIndex: 2,
              color: colors.grey["800"],
            },
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
          <EmailInput control={control} name="email" label={t("email")} />
          <PasswordInput control={control} name="password" label={t("password")} />
          <PasswordInput
            sx={{ mb: 5 }}
            control={control}
            name="passwordConfirm"
            label={t("passwordConfirm")}
          />
          <Submit
            sx={{ px: 5, py: 1.5, mt: "auto" }}
            isSubmitting={signup.isLoading}
          >{t`submit`}</Submit>
        </Stack>
        <Typography textAlign={"center"}>
          {t("aMember")} <RouterLink to="/login">{t("login")}</RouterLink>
        </Typography>
      </Stack>
    </form>
  );
};
export default SignupForm;
