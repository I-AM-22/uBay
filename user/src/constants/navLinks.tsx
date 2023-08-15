import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { ProfilePhoto } from "features/account";
export const navLinks = [
  {
    href: "",
    Icon: HomeRoundedIcon,
  },
  {
    href: "transactions",
    Icon: ShoppingCartRoundedIcon,
  },
  {
    href: "chats",
    Icon: QuestionAnswerRoundedIcon,
  },
  {
    href: "settings",
    Icon: ProfilePhoto,
  },
] as const;
