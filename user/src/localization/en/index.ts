import zod from "zod-i18n-map/locales/en/zod.json";
import auth from "./auth.json";
import common from "./common.json";
import layout from "./layout.json";
import validation from "./validation.json";
const language = { common, validation, layout, auth, zod } as const;
export default language;
