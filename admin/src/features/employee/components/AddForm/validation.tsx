import z from "lib/zod";
import { emailSchema, passwordSchema } from "utils/validation";
import { Form } from "./type";

export const employeeDefaultForm: Form = {
  address: "",
  name: "",
  store: null,
  email: "",
  password: "",
};

export const employeeAddSchema: z.ZodType<Form> = z.object({
  name: z.string().nonempty(),
  email: emailSchema,
  password: passwordSchema,
  address: z.string().nonempty(),
  store: z.object({ _id: z.string(), name: z.string() }),
  photo: z.instanceof(File).optional(),
});
