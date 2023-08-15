import { WarehouseAction } from "features/warehouse";
import { Form } from "./type";

export function formToBody(form: Form): WarehouseAction {
  return { ...form, city: form.city?._id ?? "" };
}
