import i18n from "lib/i18next";
import z from "lib/zod";
import { Form } from "./type";

export const postFormDefault: Form = {
  title: "",
  category: null,
  content: "",
  photos: [],
  price: 0,
  store: null,
};
const postSchema: z.ZodType<Form> = z.object({
  title: z.string().nonempty(),
  content: z.string().nonempty(),
  photos: z.array(z.any()).min(1),
  price: z.coerce.number().positive(),
  category: z.object(
    { _id: z.string(), name: z.string() },
    { invalid_type_error: i18n.t("validation:required") }
  ),
  store: z.object(
    { _id: z.string(), name: z.string() },
    { invalid_type_error: i18n.t("validation:required") }
  ),
});
export default postSchema;
