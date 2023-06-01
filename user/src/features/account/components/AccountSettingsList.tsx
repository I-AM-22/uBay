import { Stack } from "@mui/material";
import { RouterButton } from "components/links/RouterButton";
import { accountLists } from "constants/settingsTabs";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { SettingsList } from "./SettingsList";
export type AccountSettingsListProps = {};
export const AccountSettingsList: FC<AccountSettingsListProps> = ({}) => {
  const { t } = useTranslation("account", { keyPrefix: "settings" });
  return (
    <Stack
      sx={{
        p: 3,
        gap: 3,
      }}
    >
      {accountLists.map((list) => (
        <SettingsList title={t(`${list.title}.title`)} key={list.title}>
          {list.items.map((item) => (
            <RouterButton
              to={item.href}
              key={item.href}
              sx={{ "*": { color: item.color ?? "default" } }}
            >
              {t(`${list.title}.${item.name}`)}
            </RouterButton>
          ))}
        </SettingsList>
      ))}
    </Stack>
  );
};
