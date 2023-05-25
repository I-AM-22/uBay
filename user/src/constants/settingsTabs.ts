import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import TuneIcon from "@mui/icons-material/Tune";
export const settingsTabs = [
  {
    href: "account",
    Icon: PermIdentityIcon,
  },
  {
    href: "dummy",
    Icon: SecurityRoundedIcon,
  },
  {
    href: "preferences",
    Icon: TuneIcon,
  },
] as const;
