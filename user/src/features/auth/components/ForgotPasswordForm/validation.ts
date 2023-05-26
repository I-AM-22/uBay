import z from "lib/zod";
import { emailSchema } from "utils/validation";
import { UserForgotPasswordBody } from "../../api/type";

export const forgotPasswordDefault: UserForgotPasswordBody = {
  email: "",
};
const forgotPasswordSchema: z.ZodType<UserForgotPasswordBody> = z.object({
  email: emailSchema,
});
export default forgotPasswordSchema;
