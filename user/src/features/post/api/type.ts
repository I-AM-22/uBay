import { User } from "features/account";
import { Category } from "features/category";
import { APIListParams } from "types/api";

export type PostBody = {
  title: string;
  content: string;
  photos?: File[];
  price: number;
  category: string;
  store: string;
};
export type PostAllParams = APIListParams & { is_paid?: boolean };
export type Post = {
  title: string;
  content: string;
  user: User;
  coupons: {
    _id: string;
    user: {
      _id: string;
      name: string;
      photo: string;
    };
    expire: string;
    discount: number;
    active: boolean;
    createdAt: string;
    updatedAt: string;
  }[];
  likes: number;
  photos: string[];
  price: number;
  category: Category;
  _id: string;
  is_paid: boolean;
  createdAt: string;
  updatedAt: string;
  likedBy: string[];
  likedByMe: boolean;
  comments: number;
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
  seller: Seller;
};

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

export type Seller = {
  _id: string;
  name: string;
  photo: string;
};
