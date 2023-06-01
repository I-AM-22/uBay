import z from "lib/zod";
import { passwordSchema } from "utils/validation";
import { UserUpdatePasswordBody } from "../../api/type";
export const changePasswordDefault: UserUpdatePasswordBody = {
  passwordCurrent: "",
  password: "",
};
const changePasswordSchema: z.ZodType<UserUpdatePasswordBody> = z.object({
  passwordCurrent: passwordSchema,
  password: passwordSchema,
});
export default changePasswordSchema;
