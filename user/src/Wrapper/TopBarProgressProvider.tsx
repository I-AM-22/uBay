import { Box, LinearProgress } from "@mui/material";
import { createContext, FC, ReactNode, useContext, useState } from "react";
type Props = { children: ReactNode };
const TopBarLoadingContext = createContext({
  topBarLoading: false,
  setTopBarLoading: (value: boolean) => value,
});

export const useTopBarLoadingContext = () => useContext(TopBarLoadingContext);

export const TopBarProgressIndicator = () => (
  <Box
    sx={{
      width: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 99999999,
    }}
  >
    <LinearProgress variant="indeterminate" sx={{ padding: 0.4 }} color="primary" />
  </Box>
);
const TopBarProgressProvider: FC<Props> = ({ children }) => {
  const [topBarLoading, setTopBarLoading] = useState(false);
  return (
    <TopBarLoadingContext.Provider
      value={{ topBarLoading, setTopBarLoading: setTopBarLoading as (value: boolean) => boolean }}
    >
      {topBarLoading && <TopBarProgressIndicator />}
      {children}
    </TopBarLoadingContext.Provider>
  );
};
export default TopBarProgressProvider;
