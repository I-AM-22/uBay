import { APIListParams } from "types/api";

export type PostBody = {
  title: string;
  content: string;
  photos?: File[];
  price: number;
  category: string;
  store: string;
};
export type PostAllParams = APIListParams & { q: string; is_paid?: boolean };
export type Post = {
  _id: string;
  title: string;
  content: string;
  user: Store;
  likedBy: LikedBy[];
  coupons: any[];
  photos: string[];
  price: number;
  is_paid: boolean;
  category: Category;
  store: Store;
  comments: number;
  createdAt: string;
  updatedAt: string;
  likes: number;
  likedByMe: boolean;
  id: string;
};

export type Category = {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};

export type LikedBy = {
  _id: string;
  name: string;
  photo: string;
  favoriteCategories: any[];
  favoriteCities: any[];
  id: string;
};

export type Store = {
  _id: string;
  name: string;
  city: {
    _id: string;
    name: string;
  };
  id: string;
  photo?: string;
};

export type PostMineParams = { isBuy: boolean };
export type PostMine = {
  wait: ProductMine[];
  seller: ProductMine[];
  customer: ProductMine[];
  unpaid: Product[];
};
export type DeliveryStatusEnum = keyof PostMine;
export type ProductMine = {
  _id: string;
  payment: Payment;
  customer_date: string;
  seller_date: string;
  createdAt: Date;
  product: Product;
} & (
  | {
      customer: User;
      seller: never;
    }
  | {
      customer: never;
      seller: User;
    }
);

export type Payment = {
  _id: string;
  is_discount: boolean;
  createdAt: Date;
  price_after: number;
};

export type Product = {
  _id: string;
  title: string;
  coupons: any[];
  photos: string[];
  price: number;
  category: string;
  store: string;
};

export type User = {
  _id: string;
  name: string;
  photo: string;
};
