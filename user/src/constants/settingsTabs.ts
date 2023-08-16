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

export const accountLists: {
  title: string;
  items: { href: string; name: string; color?: string }[];
}[] = [
  {
    title: "profile",
    items: [
      { href: "/settings/profile", name: "profile" },
      { href: "/settings/profile/edit", name: "profile-edit" },
    ],
  },
  {
    title: "security",
    items: [
      { href: "/settings/password-change", name: "password-change" },
      { href: "/settings/password-forgot", name: "password-forgot" },
    ],
  },
  {
    title: "account",
    items: [{ href: "/settings/logout", name: "profile-logout", color: "error.main" }],
  },
];
