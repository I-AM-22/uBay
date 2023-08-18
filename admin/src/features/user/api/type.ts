import { APIListParams } from "types/api";

export type User = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  passwordChangedAt: string;
};
export type UserAllParams = APIListParams;
export type WalletChargeBody = {
  amount: number;
  userId: string;
};
