import i18n from "lib/i18next";
import z from "lib/zod";
import { PostForm } from "./type";

export const postFormDefault: PostForm = {
  category: null,
  content: "",
  photos: [],
  price: 0,
};
const postSchema: z.ZodType<PostForm> = z.object({
  content: z.string().nonempty(),
  photos: z.array(z.any()).min(1),
  price: z.coerce.number().positive(),
  category: z.object(
    { id: z.string(), name: z.string() },
    { invalid_type_error: i18n.t("validation:required") }
  ),
});
export default postSchema;
