import { APIListParams } from "types/api";

export type CategoryAction = {
  name: string;
  description: string;
};
export type User = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
  passwordChangedAt: string;
};
export type UserAllParams = APIListParams;
