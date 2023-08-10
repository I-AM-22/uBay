import { Post, PostBody } from "features/post";
import { Form } from "./type";

export function formToBody(form: Form): PostBody {
  return { ...form, store: form.store?.id ?? "", category: form.category?.id ?? "" };
}
export function detailsToForm(post: Post): Form {
  return {
    category: post.category,
    content: post.content,
    price: post.price,
    title: post.title,
    //TODO receive from backend
    store: { id: "", name: "", city: { id: "", name: "", _id: "" } },
  };
}
