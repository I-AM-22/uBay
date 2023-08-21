import { Toolbar, useMediaQuery, useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { CSSObject, Theme, styled } from "@mui/material/styles";
import { createSideBarItems } from "constants/sideBarItems";
import { FC, Fragment, ReactNode, useState } from "react";
import { storage } from "utils/storage";
import SideBarListItem from "./SideBarListItem";

const drawerWidth = 240;

type Props = { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> };
const Sidebar: FC<Props> = ({ open, setOpen }) => {
  const [activeItem, setActiveItem] = useState<[boolean, string]>([false, ""]);
  const small = useMediaQuery(useTheme().breakpoints.down("sm"));
  const sideBarListItems = createSideBarItems(storage.getRole());
  return (
    <ResponsiveDrawer open={open}>
      <Toolbar />
      {sideBarListItems.map((section, index) => (
        <Fragment key={index}>
          <Divider />
          <List disablePadding>
            {section.map((sideBarItem) => {
              return (
                <SideBarListItem
                  onClick={() => small && setOpen(false)}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                  data={sideBarItem}
                  sideBarIsOpen={open}
                  key={sideBarItem.href}
                  level={0}
                />
              );
            })}
          </List>
        </Fragment>
      ))}
    </ResponsiveDrawer>
  );
};

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  "&, .fade, .fade *": {
    transition: theme.transitions.create(["width", "opacity", "margin", "padding"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  overflowX: "hidden",
});

const closedMixin = (theme: Theme, iconOnly: boolean): CSSObject => ({
  "&, .fade, .fade *": {
    transition: theme.transitions.create(["width", "opacity", "margin", "padding"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  overflowX: "hidden",
  ...(iconOnly && {
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  }),
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DrawerPermanent = styled(MuiDrawer)(({ theme, open }) => ({
  minWidth: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme, true),
    "& .MuiDrawer-paper": closedMixin(theme, true),
  }),
}));
const DrawerTemporary = styled(MuiDrawer)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme, false),
    "& .MuiDrawer-paper": closedMixin(theme, false),
  }),
}));

type ResponsiveDrawerProps = {
  open: boolean;
  children: ReactNode;
};
const ResponsiveDrawer: FC<ResponsiveDrawerProps> = ({ open, children }) => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const ltr = useTheme().direction === "ltr";
  return (
    <>
      {small ? (
        <DrawerTemporary
          variant="temporary"
          anchor="left"
          SlideProps={{ direction: ltr ? "right" : "left" }}
          open={open}
        >
          {children}
        </DrawerTemporary>
      ) : (
        <DrawerPermanent variant="permanent" open={open}>
          {children}
        </DrawerPermanent>
      )}
    </>
  );
};
export default Sidebar;
