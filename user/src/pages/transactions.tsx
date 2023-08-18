import { Tab } from "@mui/material";
import TabPanel from "components/layout/TabPanel";
import Tabs from "components/layout/Tabs";
import { PostMineList } from "features/post";
import SwipeableViews from "lib/SwipeableViews";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { storage } from "utils/storage";
const TransactionsPage: FC<{}> = ({}) => {
  const startTab = storage.getTransactionsTab();

  const { t } = useTranslation("post");
  const [activeIndex, setActiveIndex] = useState(startTab);

  const handleTabChange = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    storage.setTransactionsTab(activeIndex);
  }, [activeIndex]);
  return (
    <>
      <Tabs
        sx={{ bgcolor: "#fff", width: { xs: 1, md: 1 }, px: { md: "30%" }, mx: "auto" }}
        value={activeIndex}
        onChange={(_, index) => handleTabChange(index)}
      >
        <Tab label={t("myPurchases")} />
        <Tab label={t("mySales")} />
      </Tabs>
      <SwipeableViews index={activeIndex} onChangeIndex={handleTabChange}>
        <TabPanel activeIndex={activeIndex} index={0}>
          <PostMineList isBuy />
        </TabPanel>
        <TabPanel activeIndex={activeIndex} index={1}>
          <PostMineList isBuy={false} />
        </TabPanel>
      </SwipeableViews>
    </>
  );
};
export default TransactionsPage;
