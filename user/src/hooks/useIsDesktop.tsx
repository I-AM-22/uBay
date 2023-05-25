import { useMediaQuery, useTheme } from "@mui/material";
export const useIsDesktop = () => {
  return useMediaQuery(useTheme().breakpoints.up("sm"));
};
