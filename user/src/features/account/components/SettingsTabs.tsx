import { Tab, Tabs } from "@mui/material";
import { settingsTabs } from "constants/settingsTabs";
import { FC, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
function getIndexFromLink(pathname: string) {
  pathname = pathname.slice(1);
  if (pathname === "") return 0;
  return settingsTabs.findIndex((link) => pathname.includes(link.href));
}
function getLinkFromIndex(index: number) {
  return settingsTabs[index].href;
}
export type SettingsTabsProps = {};
export const SettingsTabs: FC<SettingsTabsProps> = ({}) => {
  const { t } = useTranslation("account", { keyPrefix: "settings.tabs" });
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const handlePageChange = useCallback(
    (_: any, index: number) => {
      const navTo = getLinkFromIndex(index);
      if (!window.location.pathname.includes(navTo)) {
        setCurrentIndex(index);
        navigate(navTo);
      }
    },
    [navigate]
  );

  useEffect(() => {
    if (currentIndex === null) setCurrentIndex(getIndexFromLink(window.location.pathname));
  }, [currentIndex]);
  return (
    <Tabs onChange={handlePageChange} value={currentIndex} sx={{ mx: "auto" }}>
      {settingsTabs.map((settingsTab, index) => (
        <Tab
          iconPosition="start"
          sx={{
            minHeight: 50,
            borderRadius: "3px 3px 0 0",
            svg: {
              fill: (th) => (index === currentIndex ? th.palette.primary.main : "gray"),
            },
          }}
          label={t(settingsTab.href)}
          key={settingsTab.href}
          icon={<settingsTab.Icon />}
        />
      ))}
    </Tabs>
  );
};
