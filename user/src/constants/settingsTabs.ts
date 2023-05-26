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
      { href: "profile" },
      { href: "profile-update" },
      { href: "profile-delete", color: "error.main" },
    ],
  },
  {
    title: "security",
    items: [{ href: "password-change" }, { href: "password-forgot" }],
  },
];
