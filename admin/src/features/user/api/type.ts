import { APIListParams } from "types/api";

export type User = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: string;
  active: boolean;
  favoriteCategories: any[];
  favoriteCities: any[];
  createdAt: Date;
  updatedAt: Date;
  wallet: Wallet;
  passwordChangedAt: string;
  id: string;
};

export type Wallet = {
  _id: string;
  user: string;
  total: number;
  pending: number;
  createdAt: Date;
  updatedAt: Date;
  available: number;
  id: string;
};

export type UserAllParams = APIListParams;
export type WalletChargeBody = {
  amount: number;
  userId: string;
};
