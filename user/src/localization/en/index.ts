import zod from "zod-i18n-map/locales/en/zod.json";
import auth from "./auth.json";
import common from "./common.json";
import layout from "./layout.json";
import validation from "./validation.json";
import account from "./account.json";
import chat from "./chat.json";
import comment from "./comment.json";
import discount from "./discount.json";
import payment from "./payment.json";
import post from "./post.json";
const language = {
  common,
  validation,
  layout,
  auth,
  zod,
  account,
  chat,
  comment,
  discount,
  payment,
  post,
} as const;
export default language;
