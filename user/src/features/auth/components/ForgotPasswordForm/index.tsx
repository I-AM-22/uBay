import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Submit from "components/buttons/Submit";
import { useSnackbar } from "context/snackbarContext";
import { authQueries } from "features/auth";
import z from "lib/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { parseResponseError } from "utils/apiHelpers";
import { UserForgotPasswordBody } from "../../api/type";
import EmailInput from "../EmailInput";
import forgotPasswordSchema, { forgotPasswordDefault } from "./validation";
export const ForgotPasswordForm = () => {
  const { control, handleSubmit, setError } = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: forgotPasswordDefault,
  });
  const navigate = useNavigate();
  const forgotPassword = authQueries.useForgotPassword();
  const snackbar = useSnackbar();
  const { t } = useTranslation("auth", { keyPrefix: "forgotPassword" });
  const onSubmit = async (data: UserForgotPasswordBody) => {
    forgotPassword.mutate(data, {
      onSuccess: () => {
        navigate("/reset-password");
      },
      onError: parseResponseError({ setFormError: setError, snackbar }),
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
            mt: 5,
            mx: "auto",
          }}
        >
          <EmailInput control={control} name="email" />
          <Submit
            sx={{ px: 5, py: 1.5 }}
            isSubmitting={forgotPassword.isLoading}
          >{t`submit`}</Submit>
        </Stack>
      </Stack>
    </form>
  );
};
