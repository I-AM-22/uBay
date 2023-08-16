import { BottomNavigationAction, Box, Paper } from "@mui/material";
import MuiBottomNavigation from "@mui/material/BottomNavigation";
import { navLinks } from "constants/navLinks";
import { FC, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getIndexFromLink, getLinkFromIndex } from "../utils/linksParsers";
export const BOTTOM_NAVIGATOR_HEIGHT_IN_SPACINGS = 7;
export const BottomNavigator: FC<{}> = ({}) => {
  const [currentIndex, setCurrentIndex] = useState<number | false>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handlePageChange = useCallback(
    (index: number) => {
      const navTo = getLinkFromIndex(index);
      if (!window.location.pathname.includes(navTo) || navTo === "") {
        setCurrentIndex(index);
        navigate(navTo);
      }
    },
    [navigate]
  );
  useEffect(() => {
    if (currentIndex === false) setCurrentIndex(getIndexFromLink(window.location.pathname));
  }, [currentIndex]);
  useEffect(() => {
    setCurrentIndex(getIndexFromLink(location.pathname));
  }, [location]);
  return (
    <>
      <Box mt={BOTTOM_NAVIGATOR_HEIGHT_IN_SPACINGS} />
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          a: {
            "&:hover": {
              color: "primary.main",
            },
          },
          ".MuiBottomNavigationAction-label": {
            fontSize: "1em",
          },
          ".Mui-selected .MuiBottomNavigationAction-label": {
            fontSize: "1em",
          },
        }}
        elevation={1}
      >
        <MuiBottomNavigation
          showLabels
          value={currentIndex}
          onChange={(_, newIndex) => handlePageChange(newIndex)}
        >
          {navLinks.map((navLink, index) => (
            <BottomNavigationAction
              sx={{
                py: 0.5,
                svg: {
                  flex: 1,
                  fontSize: 25,
                  fill: index === currentIndex ? "primary.main" : "gray",
                },
                display: index === navLinks.length - 1 ? "none" : "default",
              }}
              key={navLink.href}
              icon={<navLink.Icon />}
            />
          ))}
          <BottomNavigationAction
            sx={{
              display: "none",
            }}
          />
        </MuiBottomNavigation>
      </Paper>
    </>
  );
};
