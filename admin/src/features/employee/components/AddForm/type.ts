import { EmployeeAddBody } from "features/employee";
import { WarehouseSelect } from "features/warehouse";

export type Form = Omit<EmployeeAddBody, "store"> & { store: WarehouseSelect | null };
