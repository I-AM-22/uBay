import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
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
    href: "notification",
    Icon: NotificationsRoundedIcon,
  },
  {
    href: "settings",
    Icon: ProfilePhoto,
  },
];
