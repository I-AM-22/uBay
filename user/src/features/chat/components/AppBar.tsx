import { Paper, Stack, Tab, useMediaQuery, useTheme } from "@mui/material";
import TabPanel from "components/layout/TabPanel";
import Tabs from "components/layout/Tabs";
import SwipeableViews from "lib/SwipeableViews";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { storage } from "utils/storage";
import BuyChat from "./buy/BuyChat";
import SellChat from "./sell/SellChat";
const AppBarChat: FC<{}> = ({}) => {
  const { t } = useTranslation("chat");
  const startTab = storage.getChatTab();

  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));
  const [activeIndex, setActiveIndex] = useState(startTab);
  const handleTabChange = (index: number) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    storage.setChatTab(activeIndex);
  }, [activeIndex]);
  return (
    <Paper
      elevation={1}
      component={Stack}
      flex={1}
      sx={{
        "&>.MuiPaper-root": isMdOrLarger
          ? {
              boxShadow: "none",
            }
          : {},
      }}
    >
      <Tabs
        sx={{
          bgcolor: "#fff",
          width: { xs: 1, md: 1 },
          "& .MuiButtonBase-root": {
            minHeight: 56,
          },
          mx: "auto",
        }}
        value={activeIndex}
        onChange={(_, index) => handleTabChange(index)}
      >
        <Tab label={t("myPurchases")} />
        <Tab label={t("mySales")} />
      </Tabs>
      <SwipeableViews index={activeIndex} onChangeIndex={handleTabChange}>
        <TabPanel activeIndex={activeIndex} index={0}>
          <BuyChat />
        </TabPanel>
        <TabPanel activeIndex={activeIndex} index={1}>
          <SellChat />
        </TabPanel>
      </SwipeableViews>
    </Paper>
  );
};
export default AppBarChat;
