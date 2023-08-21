import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AppsIcon from "@mui/icons-material/Apps";
import CategoryIcon from "@mui/icons-material/Category";
import PeopleIcon from "@mui/icons-material/People";

import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PublicIcon from "@mui/icons-material/Public";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import { Role } from "features/admin";
import { ReactNode } from "react";
export type SideBarItem = { href: string; icon: ReactNode; children?: SideBarItem[] };
export const createSideBarItems: (role: Role) => SideBarItem[][] = (role) =>
  [
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
        href: "cities",
        icon: <PublicIcon />,
      },
      {
        href: "warehouses",
        icon: <WarehouseIcon />,
      },
      {
        href: "employees",
        icon: <AssignmentIndIcon />,
      },
    ],
    ...[
      role === "superadmin"
        ? [
            {
              href: "admins",
              icon: <AdminPanelSettingsIcon />,
            },
          ]
        : [],
    ],
  ].filter((section) => section.length !== 0);
