import i18n from "lib/i18next";
import { UserLoginBody } from "../../api/type";
import z from "lib/zod";

export const userNameRegex = /^[a-z0-9_-]*$/i;
export const passwordRegex = /^[^\s]+$/;

export const loginDefault: UserLoginBody = {
  email: "",
  password: "",
};

const loginSchema: z.ZodType<UserLoginBody> = z.object({
  email: z.string().trim().nonempty().email(),
  password: z.string().nonempty().regex(passwordRegex, i18n.t(`auth:validation.password`)).min(6),
});
export default loginSchema;
