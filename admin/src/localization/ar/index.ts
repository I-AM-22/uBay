import zod from "zod-i18n-map/locales/ar/zod.json";
import auth from "./auth.json";
import category from "./category.json";
import common from "./common.json";
import layout from "./layout.json";
import validation from "./validation.json";
const language = { common, validation, layout, zod, auth, category } as const;
export default language;
