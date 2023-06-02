import z from "lib/zod";
import { CategoryAction } from "../api/type";

export const categoryDefaultForm: CategoryAction = {
  name: "",
  description: "",
};

export const categorySchema: z.ZodType<CategoryAction> = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
});
