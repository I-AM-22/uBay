import { Tab, Tabs } from "@mui/material";
import RouterLink from "components/links/RouterLink";
import { navLinks } from "constants/navLinks";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import { getIndexFromLink } from "../utils/linksParsers";

export const AppBarNavigator: FC<{}> = ({}) => {
  const location = useLocation();
  const currentIndex = getIndexFromLink(location.pathname);

  return (
    <>
      <Tabs value={currentIndex} sx={{ height: 1 }}>
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
    </>
  );
};
