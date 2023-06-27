import z from "lib/zod";
import { emailSchema, passwordSchema } from "utils/validation";
import { Form } from "./AddForm/type";

export const employeeDefaultForm: Form = {
  address: "",
  phone_number: "",
  name: "",
  store: null,
  work_time: "",
  email: "",
  password: "",
};

export const employeeAddSchema: z.ZodType<Form> = z.object({
  name: z.string().nonempty(),
  email: emailSchema,
  password: passwordSchema,
  address: z.string().nonempty(),
  store: z.object({ id: z.string(), name: z.string() }),
  work_time: z.string().nonempty(),
  phone_number: z.string().nonempty(),
});
