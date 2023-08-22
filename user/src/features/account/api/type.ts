import { CategorySelect } from "features/category";
import { CitySelect } from "features/city";

export type User = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: string;
  favoriteCategories: CategorySelect[];
  favoriteCities: CitySelect[];
  createdAt: Date;
  updatedAt: Date;
  wallet: Wallet;
  id: string;
};

export type FavoriteUpdate = {
  favoriteCategories: string[];
  favoriteCities: string[];
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

export type UserEditBody = {
  name: string;
  email: string;
  photo?: File;
};
