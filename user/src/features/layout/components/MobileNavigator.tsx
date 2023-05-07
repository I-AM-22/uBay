import { useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import { BottomNavigator } from "./BottomNavigator";
export type MobileNavigatorProps = {};
export const MobileNavigator: FC<MobileNavigatorProps> = ({}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return isMobile ? <BottomNavigator /> : <></>;
};
