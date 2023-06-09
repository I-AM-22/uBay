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
  likes: null;
  photos: string[];
  price: number;
  category: Category;
  _id: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};
