import { TabsProps as MuiProps, Tabs as MuiTabs, SxProps, Theme } from "@mui/material";

import { alpha } from "@mui/material/styles";
import { Box } from "@mui/system";
import { FC } from "react";
export type TabsProps = MuiProps;
export const Tabs: FC<TabsProps> = (props) => {
  const sx = {
    mx: 1,
    ".MuiTab-root": {
      color: (theme) => alpha(theme.palette.primary.main, 0.8),
      fontSize: 15,
      ":not(:first-of-type)": {
        borderLeft: `1px solid #D8E0E1`,
      },
    },
    ".Mui-selected": { color: "primary.main" },
  } satisfies SxProps<Theme>;
  return (
    <MuiTabs
      TabIndicatorProps={{
        children: <Box sx={{ height: "100%", mx: 2, bgcolor: "primary.main" }} />,
        sx: { bgcolor: "transparent" },
      }}
      variant="fullWidth"
      {...props}
      sx={{ ...sx, ...props.sx }}
    />
  );
};
export default Tabs;
