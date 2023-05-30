import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TuneIcon from "@mui/icons-material/Tune";
export const settingsTabs = [
  {
    href: "account",
    Icon: PermIdentityIcon,
  },
  {
    href: "preferences",
    Icon: TuneIcon,
  },
] as const;

export const accountLists = [
  {
    title: "account",
    items: [
      { href: "/settings/profile", name: "profile" },
      { href: "/settings/profile/edit", name: "profile-edit" },
      { href: "/settings/profile-delete", name: "profile-delete", color: "error.main" },
    ],
  },
  {
    title: "security",
    items: [
      { href: "/settings/password-change", name: "password-change" },
      { href: "/settings/password-forgot", name: "password-forgot" },
    ],
  },
];
