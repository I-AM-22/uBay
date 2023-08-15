import z from "lib/zod";
import { emailSchema, passwordSchema } from "utils/validation";
import { Form } from "./type";

export const employeeDefaultForm: Form = {
  address: "",
  name: "",
  store: null,
  email: "",
  password: undefined,
};

export const employeeEditSchema: z.ZodType<Form> = z.object({
  name: z.string().nonempty(),
  email: emailSchema,
  password: z.union([z.undefined(), passwordSchema]),
  address: z.string().nonempty(),
  photo: z.instanceof(File).optional(),
  store: z.object({ _id: z.string(), name: z.string() }),
});
