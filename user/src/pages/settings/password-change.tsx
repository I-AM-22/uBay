import { Divider, Paper, Stack, Typography } from "@mui/material";
import RouterLink from "components/links/RouterLink";
import { PasswordChangeForm } from "features/auth";
import { FC } from "react";
import { useTranslation } from "react-i18next";
export const PasswordChangePage: FC<{}> = ({}) => {
  const { t } = useTranslation("auth", { keyPrefix: "changePassword" });
  return (
    <Paper
      sx={{
        flex: { xs: 1, sm: 0 },
        width: { xs: 1, sm: 400, md: 600 },
        mt: { xs: 0, sm: 4 },
        p: 5,
        mx: "auto",
        gap: 3,
      }}
      component={Stack}
    >
      <PasswordChangeForm />
      <Divider />
      <Typography textAlign={"center"}>
        {t("forgotPassword")}
        <RouterLink to="/settings/password-forgot">{t("resetPassword")}</RouterLink>
      </Typography>
    </Paper>
  );
};
