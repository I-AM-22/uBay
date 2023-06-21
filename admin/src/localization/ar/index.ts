import zod from "zod-i18n-map/locales/ar/zod.json";
import admin from "./admin.json";
import category from "./category.json";
import common from "./common.json";
import layout from "./layout.json";
import user from "./user.json";
import validation from "./validation.json";
const language = { common, validation, layout, zod, admin, category, user } as const;
export default language;
