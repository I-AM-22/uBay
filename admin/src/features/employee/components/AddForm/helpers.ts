import { EmployeeActionBody } from "features/employee";
import { Form } from "./type";

export function formToBody(form: Form): EmployeeActionBody {
  return { ...form, store: form.store?.id ?? "" };
}
