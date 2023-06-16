import { PostBody } from "features/post";
import { PostForm } from "./type";

export function fromFormToBody(form: PostForm): PostBody {
  return { ...form, category: form.category?.id ?? "" };
}
// export function fromDetailsToForm(post:Post): PostForm {
//   return { category:{id:post.category.id,name:post.category.name},content:post.content, };
// }
