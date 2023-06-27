import { EmployeeActionBody } from "features/employee";
import { WarehouseSelect } from "features/warehouse";

export type Form = Omit<EmployeeActionBody, "store"> & { store: WarehouseSelect | null };
