import { EmployeeDetails, EmployeeEditBody } from "features/employee";
import { Form } from "./type";

export function formToBody(form: Form): EmployeeEditBody {
  const { password, store, ...body } = form;
  return {
    ...body,
    store: store?._id ?? "",
    ...(password && { password }),
  };
}
export function detailsToForm(details: EmployeeDetails): Form {
  return {
    address: details.address,
    email: details.email,
    name: details.name,
    store: details.store,
  };
}
