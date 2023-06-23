import { APIListParams } from "types/api";

export type CityAction = {
  name: string;
};
export type City = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};
export type CitySelect = {
  name: string;
  id: string;
};
export type CityAllParams = APIListParams;
