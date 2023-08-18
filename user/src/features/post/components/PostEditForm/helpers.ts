import { Post, PostBody } from "features/post";
import { Form } from "./type";

export function formToBody(form: Form): PostBody {
  return { ...form, store: form.store?._id ?? "", category: form.category?._id ?? "" };
}
export function detailsToForm(post: Post): Form {
  return {
    category: post.category,
    content: post.content,
    price: post.price,
    title: post.title,
    store: post.store,
  };
}
