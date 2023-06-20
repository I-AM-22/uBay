import { Stack, Typography } from "@mui/material";
import { AccountSettingsList, ProfilePhoto, SettingsTabs } from "features/account";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { LogoutPage } from "./profile/logout";
import { ProfileRemovePage } from "./profile/remove";

export const SettingsPage: FC<{}> = ({}) => {
  const { t } = useTranslation("account", { keyPrefix: "settings" });
  return (
    <Stack sx={{}}>
      <Stack sx={{ pt: 5, px: 4, bgcolor: "white", gap: 1 }}>
        <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
          <ProfilePhoto sx={{ width: 50, height: 50 }} />
          <Typography variant="h3" sx={{ fontSize: { xs: 20, md: 26 } }}>
            {t("title")}
          </Typography>
        </Stack>
        <SettingsTabs />
      </Stack>
      <Routes>
        <Route path="" element={<AccountSettingsList />} />
        <Route path="profile/remove" element={<ProfileRemovePage />} />
        <Route path="logout" element={<LogoutPage />} />
        <Route path="account" element={<AccountSettingsList />} />
        <Route path="preferences" element={<></>} />
      </Routes>
    </Stack>
  );
};
