import { CommentBody } from "features/comment";
import z from "lib/zod";

export const commentFormDefault: CommentBody = {
  content: "",
  product: "",
};
const commentSchema: z.ZodType<CommentBody> = z.object({
  content: z.string(),
  product: z.string().nonempty(),
});
export default commentSchema;
