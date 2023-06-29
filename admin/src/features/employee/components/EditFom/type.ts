import { EmployeeEditBody } from "features/employee";
import { WarehouseSelect } from "features/warehouse";

export type Form = Omit<EmployeeEditBody, "store"> & { store: WarehouseSelect | null };
