import z from "lib/zod";
import { Form } from "./AddForm/type";

export const warehouseDefaultForm: Form = {
  name: "",
  address: "",
  city: null,
};

export const warehouseSchema: z.ZodType<Form> = z.object({
  name: z.string().nonempty(),
  address: z.string().nonempty().min(15),
  city: z.object({ _id: z.string(), name: z.string() }),
});
