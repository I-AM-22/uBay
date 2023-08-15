import zod from "zod-i18n-map/locales/ar/zod.json";
import account from "./account.json";
import auth from "./auth.json";
import comment from "./comment.json";
import common from "./common.json";
import discount from "./discount.json";
import layout from "./layout.json";
import payment from "./payment.json";
import post from "./post.json";
import chat from "./chat.json";
import validation from "./validation.json";
const language = {
  payment,
  common,
  post,
  comment,
  validation,
  layout,
  auth,
  account,
  chat,
  zod,
  discount,
} as const;
export default language;
