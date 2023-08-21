import auth from "./auth.json";
import zod from "zod-i18n-map/locales/en/zod.json";
import common from "./common.json";
import layout from "./layout.json";
import validation from "./validation.json";
import admin from "./admin.json";
import category from "./category.json";
import city from "./city.json";
import employee from "./employee.json";
import home from "./home.json";
import user from "./user.json";
import warehouse from "./warehouse.json";
const language = {
  common,
  validation,
  zod,
  layout,
  auth,
  admin,
  category,
  city,
  employee,
  home,
  user,
  warehouse,
} as const;
export default language;
