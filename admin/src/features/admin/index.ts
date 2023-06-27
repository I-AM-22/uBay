import { keys, queries } from "./api/queries";
export * from "../shared/components/PasswordInput";
export * from "./api/type";
export { AddForm as AdminAddForm } from "./components/AddForm";
export { EditForm as AdminEditForm } from "./components/EditForm";
export * from "./components/Login";
export { RemoveForm as AdminRemoveForm } from "./components/RemoveForm";
export { Table as AdminsTable } from "./components/Table";

export { keys as adminKeys, queries as adminQueries };
