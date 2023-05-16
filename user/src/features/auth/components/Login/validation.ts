import i18n from "lib/i18next";
import z from "lib/zod";
import { UserLoginBody } from "../../api/type";

export const userNameRegex = /^[a-z0-9_-]*$/i;
export const passwordRegex = /^[^\s]+$/;

export const loginDefault: UserLoginBody = {
  email: "",
  password: "",
};
const loginSchema: z.ZodType<UserLoginBody> = z.object({
  email: z.string().nonempty().trim().email(),
  password: z.string().nonempty().regex(passwordRegex, i18n.t(`auth:validation.password`)).min(6),
});
export default loginSchema;
