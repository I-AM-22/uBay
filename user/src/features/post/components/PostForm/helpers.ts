import { PostBody } from "features/post";
import { PostForm } from "./type";

export function fromFormToBody(form: PostForm): PostBody {
  return { ...form, category: form.category?.id ?? "" };
}
