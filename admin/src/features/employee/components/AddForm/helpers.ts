import { EmployeeAddBody } from "features/employee";
import { Form } from "./type";

export function formToBody(form: Form): EmployeeAddBody {
  return { ...form, store: form.store?._id ?? "" };
}
