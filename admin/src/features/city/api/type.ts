import { APIListParams } from "types/api";

export type CityAction = {
  name: string;
};
export type City = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};
export type CitySelect = {
  name: string;
  _id: string;
};
export type CityAllParams = APIListParams;
