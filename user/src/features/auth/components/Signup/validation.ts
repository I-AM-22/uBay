import i18n from "lib/i18next";
import z from "lib/zod";
import { UserSignupBody } from "../../api/type";

export const userNameRegex = /^[a-z0-9_-]*$/i;
export const passwordRegex = /^[^\s]+$/;

export const signupDefault: UserSignupBody = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};
const signupSchema: z.ZodType<UserSignupBody> = z
  .object({
    name: z.string().trim().nonempty(),
    email: z.string().trim().nonempty().email(),
    password: z.string().nonempty().regex(passwordRegex, i18n.t(`auth:validation.password`)).min(6),
    passwordConfirm: z.string().nonempty(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: i18n.t(`auth:validation.passwordConfirm`),
    path: ["passwordConfirm"],
  });
export default signupSchema;
