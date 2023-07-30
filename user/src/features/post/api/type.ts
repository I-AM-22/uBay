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
export type PostAllParams = APIListParams;
export type Post = {
  title: string;
  content: string;
  user: User;
  likes: number;
  photos: string[];
  price: number;
  category: Category;
  _id: string;
  is_paid: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
  likedBy: string[];
  likedByMe: boolean;
  comments: number;
};

export type PostMineParams = { isBuy: boolean };
export type PostMine = {
  delivery_status: "wait" | "customer" | "seller";
  product: {
    _id: string;
    title: string;
    content: string;
    user: string;
    likedBy: string[];
    photos: string[];
    price: number;
    is_paid: boolean;
    category: string;
    comments: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
};
