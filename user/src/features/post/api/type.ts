import { User } from "features/account";
import { Category } from "features/category";
import { APIListParams } from "types/api";

export type PostBody = {
  content: string;
  photos: File[];
  price: number;
  category: string;
};
export type PostAllParams = APIListParams;
export type Post = {
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
