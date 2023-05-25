import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Stack, Typography } from "@mui/material";
import { SettingsTabs } from "features/account";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";

export const ProfilePage: FC<{}> = ({}) => {
  const { t } = useTranslation("account", { keyPrefix: "settings" });
  return (
    <Stack sx={{}}>
      <Stack sx={{ pt: 2, px: 3, bgcolor: "white", gap: 3 }}>
        <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
          <AccountCircleRoundedIcon sx={{ width: 40, height: 1 }} />
          <Typography variant="h4">{t("title")}</Typography>
        </Stack>
        <SettingsTabs />
      </Stack>
      <Routes>
        <Route path="account" element={<></>} />
        <Route path="preferences" element={<></>} />
      </Routes>
    </Stack>
  );
};
