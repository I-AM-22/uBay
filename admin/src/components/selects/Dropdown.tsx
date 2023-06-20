import Menu, { MenuProps } from "@mui/material/Menu";
import { styled } from "@mui/material/styles";
import * as React from "react";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    minWidth: 180,
    "& .MuiMenu-list": {
      padding: 0,
    },
    "& .MuiMenuItem-root": {
      ".MuiTouchRipple-root": {
        color: theme.palette.primary.main,
      },
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));
export type DropdownProps = { anchor: null | HTMLElement; onClose: () => void } & Omit<
  MenuProps,
  "open"
>;
export const Dropdown: React.FC<DropdownProps> = ({ anchor, onClose, ...props }) => {
  const open = Boolean(anchor);

  return <StyledMenu anchorEl={anchor} open={open} onClose={onClose} {...props} />;
};
