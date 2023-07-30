import { Box, BoxProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { FC, ReactNode, useState } from "react";
export type TabPanelProps = {
  startOpened?: boolean;
  activeIndex: number;
  index: number;
  children: ReactNode;
} & BoxProps;
export const TabPanel: FC<TabPanelProps> = ({
  startOpened = false,
  children,
  activeIndex,
  index,
  ...props
}) => {
  const [open, setOpen] = useState(startOpened);
  if (activeIndex === index && !open) {
    setOpen(true);
  }
  const theme = useTheme();

  return (
    <Box role="tabpanel" dir={theme.direction} hidden={!open} {...props}>
      {open && children}
    </Box>
  );
};
export default TabPanel;
