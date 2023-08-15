import { APIListParams, Payload } from "types/api";

export type CategoryAction = {
  name: string;
  description: string;
};
export type Category = {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};
export type CategoryAllParams = APIListParams;
export type CategoryAddPayload = Payload<undefined, CategoryAction>;
export type CategoryEditPayload = CategoryAddPayload;
