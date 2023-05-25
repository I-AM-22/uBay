import zod from "zod-i18n-map/locales/ar/zod.json";
import account from "./account.json";
import auth from "./auth.json";
import common from "./common.json";
import layout from "./layout.json";
import validation from "./validation.json";
const language = { common, validation, layout, auth, account, zod } as const;
export default language;
