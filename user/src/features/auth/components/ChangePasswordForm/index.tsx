import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useQueryClient } from "@tanstack/react-query";
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
import { UserUpdatePasswordBody } from "../../api/type";
import PasswordInput from "../PasswordInput";
import changePasswordSchema, { changePasswordDefault } from "./validation";
export const PasswordChangeForm = () => {
  const { control, handleSubmit, setError } = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: changePasswordDefault,
  });
  const navigate = useNavigate();
  const changePassword = authQueries.useChangePassword();
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();
  const { t } = useTranslation("auth", { keyPrefix: "changePassword" });
  const onSubmit = async (body: UserUpdatePasswordBody) => {
    changePassword.mutate(body, {
      onSuccess: (data) => {
        storage.setToken(data.token);
        queryClient.setQueryData(queryStore.account.profile.queryKey, data.user);
        navigate("/settings");
      },
      onError: parseResponseError({ setFormError: setError, snackbar }),
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={3} height={"100%"}>
        <Stack gap={1}>
          <Typography color="primary.800" variant="h5" textAlign={"center"}>
            {t("title")}
          </Typography>
        </Stack>
        <Stack
          gap={2}
          sx={{
            width: "80%",
            mx: "auto",
          }}
        >
          <PasswordInput control={control} name="passwordCurrent" label={t("passwordCurrent")} />
          <PasswordInput control={control} name="password" label={t("password")} />
          <Submit
            sx={{ mt: { xs: 3, sm: 5 }, px: 5, alignSelf: "" }}
            isSubmitting={changePassword.isLoading}
          >{t`submit`}</Submit>
        </Stack>
      </Stack>
    </form>
  );
};
