import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CSSObject, styled, SxProps, Theme } from "@mui/material/styles";
import { Stack } from "@mui/system";
import OptionalLink from "components/links/OptionalLink";
import RouterLink from "components/links/RouterLink";
import { navLinks } from "constants/navLinks";
import { FC, Fragment, ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const drawerWidth = 240;

type Props = { open: boolean };
const Sidebar: FC<Props> = ({ open }) => {
  const { t } = useTranslation("layout");
  const pathname = useLocation().pathname.slice(1);
  const [openItem, setOpenItem] = useState<[boolean, string]>([false, ""]);
  return (
    <ResponsiveDrawer open={open}>
      <Toolbar />
      {navLinks.map((section, index) => (
        <Fragment key={index}>
          <Divider />
          <List disablePadding>
            {section.map((navLink) => (
              <Fragment key={navLink.id}>
                <OptionalLink
                  withLink={!navLink.children}
                  sx={{
                    textDecoration: "none !important",
                    color: "#000",
                    "&:hover": { color: "primary.main" },
                  }}
                  href={navLink.href}
                >
                  <ListItem key={navLink.id} disablePadding sx={LinkSx}>
                    <ListItemButton
                      selected={pathname === navLink.href && !navLink.children}
                      className="fade"
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                      onClick={() =>
                        setOpenItem(([prevState, prevId]) => [
                          prevId !== navLink.id ? true : !prevState,
                          navLink.id,
                        ])
                      }
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: { xs: "auto", sm: open ? 3 : 0 },
                          justifyContent: "center",
                        }}
                      >
                        {navLink.icon}
                      </ListItemIcon>
                      <ListItemText>
                        <Stack
                          direction={"row"}
                          justifyContent="space-between"
                          sx={{
                            opacity: open ? 1 : 0,
                            ...(!navLink.href && { color: "primary.main", fontWeight: "550" }),
                          }}
                        >
                          {t(`navLink.${navLink.href || "home"}`)}
                          {navLink.children &&
                            (openItem[1] === navLink.id && openItem[0] ? (
                              <ExpandLess />
                            ) : (
                              <ExpandMore />
                            ))}
                        </Stack>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                </OptionalLink>
                <Collapse in={openItem[0] && openItem[1] === navLink.id}>
                  <List component="div" disablePadding>
                    {navLink.children?.map((navLinkChild, index) => (
                      <RouterLink
                        sx={{
                          textDecoration: "none !important",
                        }}
                        key={index}
                        href={navLinkChild.href}
                      >
                        <ListItem key={index} disablePadding sx={LinkSx}>
                          <ListItemButton
                            selected={pathname === navLinkChild.href}
                            className="fade"
                            sx={{
                              minHeight: 48,
                              justifyContent: open ? "initial" : "center",
                              pl: open ? 5 : 2.5,
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: { xs: "auto", sm: open ? 3 : 0 },
                                justifyContent: "center",
                              }}
                            >
                              {navLinkChild.icon}
                            </ListItemIcon>
                            <ListItemText>
                              <Stack
                                direction={"row"}
                                justifyContent="space-between"
                                sx={{
                                  opacity: open ? 1 : 0,
                                  ...(!navLinkChild.href && {
                                    color: "primary.main",
                                    fontWeight: "550",
                                  }),
                                }}
                              >
                                {t(`navLink.${navLinkChild.href}`)}
                              </Stack>
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                      </RouterLink>
                    ))}
                  </List>
                </Collapse>
              </Fragment>
            ))}
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
  width: drawerWidth,
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
const LinkSx: SxProps = {
  display: "block",
  color: "#000",
  "&:hover": { color: "primary.main" },
  "& .MuiListItemButton-root": {
    "&.Mui-selected": {
      backgroundColor: "primary.100",
    },
  },
};
type ResponsiveDrawerProps = {
  open: boolean;
  children: ReactNode;
};
const ResponsiveDrawer: FC<ResponsiveDrawerProps> = ({ open, children }) => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const ltr = useTheme().direction === "ltr";
  console.log(ltr);
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
