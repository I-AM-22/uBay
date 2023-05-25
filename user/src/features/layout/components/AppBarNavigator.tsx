import { Tab, Tabs } from "@mui/material";
import { navLinks } from "constants/navLinks";
import { FC, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function getIndexFromLink(pathname: string) {
  pathname = pathname.slice(1);
  if (pathname === "") return 0;
  return navLinks.findIndex((link) => link.href !== "" && pathname.includes(link.href));
}
function getLinkFromIndex(index: number) {
  return navLinks[index].href;
}
export const AppBarNavigator: FC<{}> = ({}) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const handlePageChange = useCallback(
    (_: any, index: number) => {
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
      {currentIndex !== null && (
        <Tabs onChange={handlePageChange} value={currentIndex} sx={{ height: 1 }}>
          {navLinks.map((navLink, index) => (
            <Tab
              sx={{
                py: 0.5,
                borderRadius: "0px 0px 2px 2px",
                ml: index === navLinks.length - 1 ? "auto" : 0,
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
        </Tabs>
      )}
    </>
  );
};
