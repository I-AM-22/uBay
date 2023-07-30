import { PostBody } from "features/post";
import { Form } from "./type";

export function fromFormToBody(form: Form): PostBody {
  return { ...form, store: form.store?.id ?? "", category: form.category?.id ?? "" };
}
