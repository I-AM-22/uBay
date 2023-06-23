import { City } from "features/city";
import { APIListParams } from "types/api";

export type WarehouseAction = {
  name: string;
  address: string;
  city: string;
};
export type Warehouse = {
  _id: string;
  name: string;
  address: string;
  city: Pick<City, "id" | "name">;
  createdAt: string;
  updatedAt: string;
  id: string;
};
export type WarehouseAllParams = APIListParams;
