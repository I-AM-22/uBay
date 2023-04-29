import auth from "./auth.json";
import common from "./common.json";
import layout from "./layout.json";
import validation from "./validation.json";
const language = { common, validation, layout, auth } as const;
export default language;
