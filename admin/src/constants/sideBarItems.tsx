import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AppsIcon from "@mui/icons-material/Apps";
import CategoryIcon from "@mui/icons-material/Category";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PeopleIcon from "@mui/icons-material/People";

import SecurityIcon from "@mui/icons-material/Security";
import SettingsIcon from "@mui/icons-material/Settings";
import { ReactNode } from "react";
export type SideBarItem = { href: string; icon: ReactNode; children?: SideBarItem[] };
export const sideBarItems: SideBarItem[][] = [
  [
    {
      href: "",
      icon: <AppsIcon />,
    },
    {
      href: "users",
      icon: <PeopleIcon />,
    },
  ],
  [
    {
      href: "categories",
      icon: <CategoryIcon />,
    },
  ],
  [
    {
      href: "admins",
      icon: <AdminPanelSettingsIcon />,
    },
    {
      href: "settings",
      icon: <SettingsIcon />,
      children: [
        {
          href: "about",
          icon: <HelpOutlineOutlinedIcon />,
        },
        {
          href: "policy",
          icon: <SecurityIcon />,
        },
      ],
    },
  ],
];
