import { EmployeeDetails, EmployeeEditBody } from "features/employee";
import { Form } from "./type";

export function formToBody(form: Form): EmployeeEditBody {
  console.log(form);

  return { ...form, store: form.store?.id ?? "", password: form.password ?? undefined };
}
export function detailsToForm(details: EmployeeDetails): Form {
  return {
    address: details.address,
    email: details.email,
    name: details.name,
    password: undefined,
    store: details.store,
    photo: undefined,
  };
}
