import z from "lib/zod";
import { passwordSchema } from "utils/validation";
import { UserResetPasswordBody } from "../../api/type";
export const resetPasswordDefault: UserResetPasswordBody = {
  password: "",
  token: "",
};
const resetPasswordSchema: z.ZodType<UserResetPasswordBody> = z.object({
  password: passwordSchema,
  token: z.string().trim().nonempty(),
});
export default resetPasswordSchema;
