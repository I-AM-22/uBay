import auth from "./auth.json";
import common from "./common.json";
import layout from "./layout.json";
import validation from "./validation.json";
const ar = { common, validation, layout, auth } as const;
export default ar;
