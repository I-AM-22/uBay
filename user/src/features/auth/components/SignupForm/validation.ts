import i18n from "lib/i18next";
import z from "lib/zod";
import { emailSchema, nameSchema, passwordSchema } from "utils/validation";
import { UserSignupBody } from "../../api/type";

export const signupDefault: UserSignupBody = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};
const signupSchema: z.ZodType<UserSignupBody> = z
  .object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    passwordConfirm: z.string().nonempty(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: i18n.t(`auth:validation.passwordConfirm`),
    path: ["passwordConfirm"],
  });
export default signupSchema;
