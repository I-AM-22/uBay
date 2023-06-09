import { Tab, Tabs } from "@mui/material";
import RouterLink from "components/links/RouterLink";
import { navLinks } from "constants/navLinks";
import { FC, useCallback, useEffect, useState } from "react";
function getIndexFromLink(pathname: string) {
  pathname = pathname.slice(1);
  if (pathname === "") return 0;
  const index = navLinks.findIndex((link) => link.href !== "" && pathname.includes(link.href));
  return index !== -1 ? index : 0;
}

export const AppBarNavigator: FC<{}> = ({}) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const handlePageChange = useCallback((_: any, index: number) => {
    setCurrentIndex(index);
  }, []);
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
                "&:hover,&:focus": {
                  color: "primary.main",
                },
                svg: {
                  flex: 1,
                  fontSize: 25,
                  fill: index === currentIndex ? "primary.main" : "gray",
                },
              }}
              component={RouterLink}
              to={navLink.href}
              key={navLink.href}
              icon={<navLink.Icon />}
            />
          ))}
        </Tabs>
      )}
    </>
  );
};
