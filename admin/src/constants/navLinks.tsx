import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AppsIcon from "@mui/icons-material/Apps";
import ArticleIcon from "@mui/icons-material/Article";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CategoryIcon from "@mui/icons-material/Category";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PeopleIcon from "@mui/icons-material/People";
import SecurityIcon from "@mui/icons-material/Security";
import SettingsIcon from "@mui/icons-material/Settings";

export const navLinks = [
  [
    {
      href: "",
      icon: <AppsIcon />,
    },
    {
      href: "users",
      icon: <PeopleIcon />,
    },
    {
      href: "categories",
      icon: <CategoryIcon />,
    },
  ],
  [
    {
      href: "billing",
      icon: <AttachMoneyIcon />,
    },
    {
      href: "reports",
      icon: <ArticleIcon />,
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
].map((section, sectionIndex) =>
  section.map((navLink, index) => ({ id: `${sectionIndex}${index}`, ...navLink }))
);
