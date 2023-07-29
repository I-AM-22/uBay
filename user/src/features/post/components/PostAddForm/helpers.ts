import { PostBody } from "features/post";
import { Form } from "./type";

export function fromFormToBody(form: Form): PostBody {
  return { ...form, category: form.category?.id ?? "" };
}
// export function fromDetailsToForm(post:Post): PostForm {
//   return { category:{id:post.category.id,name:post.category.name},content:post.content, };
// }
