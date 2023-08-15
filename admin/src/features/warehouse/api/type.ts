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
  city: Pick<City, "_id" | "name">;
  createdAt: string;
  updatedAt: string;
};
export type WarehouseAllParams = APIListParams;
export type WarehouseSelect = {
  name: string;
  _id: string;
};
