import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse, List, SxProps, Tooltip } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Stack } from "@mui/system";
import OptionalLink from "components/links/OptionalLink";
import { SideBarItem } from "constants/sideBarItems";
import { FC, Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
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
export type SideBarListItemProps = {
  data: SideBarItem;
  sideBarIsOpen: boolean;
  activeItem: [boolean, string];
  setActiveItem: React.Dispatch<React.SetStateAction<[boolean, string]>>;
  level: number;
  onClick: () => void;
};
export const SideBarListItem: FC<SideBarListItemProps> = ({
  data,
  sideBarIsOpen,
  activeItem,
  setActiveItem,
  level,
  onClick,
}) => {
  const pathname = useLocation().pathname.slice(1);
  const { t } = useTranslation("layout");
  const indent = 2.5 + level * Number(sideBarIsOpen) * 1.5;
  return (
    <Fragment key={data.href}>
      <OptionalLink
        withLink={!data.children}
        sx={{
          textDecoration: "none !important",
          color: "#000",
          "&:hover": { color: "primary.main" },
        }}
        href={data.href}
      >
        <Tooltip
          title={
            !sideBarIsOpen ? t(`navLink.${data.href || "home"}`) : undefined
          }
          placement="left"
        >
          <ListItem key={data.href} disablePadding sx={LinkSx}>
            <ListItemButton
              selected={pathname === data.href && !data.children}
              className="fade"
              sx={{
                minHeight: 48,
                justifyContent: sideBarIsOpen ? "initial" : "center",
                px: 2.5,
                pl: indent,
              }}
              onClick={() => {
                setActiveItem(([prevState, prevLocation]) => [
                  prevLocation !== data.href ? true : !prevState,
                  data.href,
                ]);
                onClick();
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: { xs: 1, sm: sideBarIsOpen ? 1.5 : 0 },
                  justifyContent: "center",
                }}
              >
                {data.icon}
              </ListItemIcon>
              <ListItemText>
                <Stack
                  direction={"row"}
                  justifyContent="space-between"
                  sx={{
                    opacity: sideBarIsOpen ? 1 : 0,
                    ...(!data.href && {
                      color: "primary.main",
                      fontWeight: "550",
                    }),
                  }}
                >
                  {t(`navLink.${data.href || "home"}`)}
                  {data.children &&
                    (activeItem[1] === data.href && activeItem[0] ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    ))}
                </Stack>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Tooltip>
      </OptionalLink>
      <Collapse in={activeItem[0] && activeItem[1] === data.href}>
        <List component="div" disablePadding>
          {data.children?.map((sideBarItem) => (
            <SideBarListItem
              onClick={onClick}
              level={level + 1}
              key={sideBarItem.href}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              data={sideBarItem}
              sideBarIsOpen={sideBarIsOpen}
            />
          ))}
        </List>
      </Collapse>
    </Fragment>
  );
};
export default SideBarListItem;
