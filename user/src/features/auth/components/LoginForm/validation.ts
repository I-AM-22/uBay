import z from "lib/zod";
import { emailSchema, passwordSchema } from "utils/validation";
import { UserLoginBody } from "../../api/type";

export const loginDefault: UserLoginBody = {
  email: "",
  password: "",
};
const loginSchema: z.ZodType<UserLoginBody> = z.object({
  email: emailSchema,
  password: passwordSchema,
});
export default loginSchema;
