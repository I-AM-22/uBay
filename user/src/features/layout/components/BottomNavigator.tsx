import { BottomNavigationAction, Box, Paper } from "@mui/material";
import MuiBottomNavigation from "@mui/material/BottomNavigation";
import { navLinks } from "constants/navLinks";
import { FC, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function getIndexFromLink(pathname: string) {
  pathname = pathname.slice(1);
  if (pathname === "") return 0;
  return navLinks.findIndex((link) => link.href !== "" && pathname.includes(link.href));
}
function getLinkFromIndex(index: number) {
  return navLinks[index].href;
}
export const BottomNavigator: FC<{}> = ({}) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const { t } = useTranslation("layout", { keyPrefix: "bottomNavigator" });
  const navigate = useNavigate();
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
    if (currentIndex === null) setCurrentIndex(getIndexFromLink(window.location.pathname));
  }, [currentIndex]);
  return (
    <>
      <Box mt={10} />
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
              }}
              key={navLink.href}
              icon={<navLink.Icon />}
            />
          ))}
        </MuiBottomNavigation>
      </Paper>
    </>
  );
};
