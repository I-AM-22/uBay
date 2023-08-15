import { Tab } from "@mui/material";
import TabPanel from "components/layout/TabPanel";
import Tabs from "components/layout/Tabs";
import SwipeableViews from "lib/SwipeableViews";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import BuyChat from "./buy/BuyChat";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import SellChat from "./sell/SellChat";
const AppBarChat: FC<{}> = ({}) => {
  const { t } = useTranslation("chat");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Tabs
        sx={{
          bgcolor: "#fff",
          width: { xs: 1, md: 1 },
          px: { md: "30%" },
          mx: "auto",
        }}
        value={activeIndex}
        onChange={(_, index) => handleTabChange(index)}
      >
        <Tab label={t("myPurchases")} icon={<ChatBubbleOutlinedIcon />} iconPosition="start" />
        <Tab label={t("mySales")} icon={<ChatBubbleOutlinedIcon />} iconPosition="start" />
      </Tabs>
      <SwipeableViews index={activeIndex} onChangeIndex={handleTabChange}>
        <TabPanel activeIndex={activeIndex} index={0}>
          <BuyChat />
        </TabPanel>
        <TabPanel activeIndex={activeIndex} index={1}>
          <SellChat />
        </TabPanel>
      </SwipeableViews>
    </>
  );
};
export default AppBarChat;
