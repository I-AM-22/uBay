import { APIList } from "types/api";

export type DiscountCreateBody = {
  user: string;
  product: string;
  expire?: string;
  discount: number;
};
export type DiscountProductList = APIList<DiscountProduct>;
export type DiscountProduct = {
  _id: string;
  user: User;
  product: Product;
  expire: Date;
  discount: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Product = {
  _id: string;
  title: string;
  photos: string[];
  price: number;
  category: Category;
  id: string;
};

export type Category = {
  _id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
};

export type User = {
  _id: string;
  name: string;
  photo: string;
  id: string;
};
