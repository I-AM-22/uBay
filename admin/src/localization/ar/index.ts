import zod from "zod-i18n-map/locales/ar/zod.json";
import admin from "./admin.json";
import category from "./category.json";
import city from "./city.json";
import common from "./common.json";
import employee from "./employee.json";
import layout from "./layout.json";
import user from "./user.json";
import validation from "./validation.json";
import warehouse from "./warehouse.json";
const language = {
  common,
  validation,
  layout,
  zod,
  employee,
  admin,
  category,
  user,
  city,
  warehouse,
} as const;
export default language;
