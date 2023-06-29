import z from "lib/zod";
import { emailSchema, passwordSchema } from "utils/validation";
import { Form } from "./type";

export const employeeDefaultForm: Form = {
  address: "",
  phone_number: "",
  name: "",
  store: null,
  work_time: "",
  email: "",
  password: undefined,
};

export const employeeEditSchema: z.ZodType<Form> = z.object({
  name: z.string().nonempty(),
  email: emailSchema,
  password: z.union([z.undefined(), passwordSchema]),
  address: z.string().nonempty(),
  store: z.object({ id: z.string(), name: z.string() }),
  work_time: z.string().nonempty(),
  phone_number: z.string().nonempty(),
});
