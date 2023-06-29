import { EmployeeDetails, EmployeeEditBody } from "features/employee";
import { Form } from "./type";

export function formToBody(form: Form): EmployeeEditBody {
  return { ...form, store: form.store?.id ?? "", password: form.password ?? undefined };
}
export function detailsToForm(details: EmployeeDetails): Form {
  return {
    address: details.address,
    email: details.email,
    name: details.name,
    password: undefined,
    phone_number: details.phone_number,
    store: null,
    work_time: details.work_time,
    photo: undefined,
  };
}
