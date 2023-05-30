import z from "lib/zod";
import { emailSchema, nameSchema } from "utils/validation";
import { UserEditBody } from "../../api/type";

const profileEditSchema: z.ZodType<UserEditBody> = z.object({
  name: nameSchema,
  email: emailSchema,
  photo: z.instanceof(File).optional(),
});
export default profileEditSchema;
