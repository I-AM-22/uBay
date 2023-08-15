import { User } from "features/account";
import { APIListParams } from "types/api";

export type CommentBody = {
  content: string;
  product: string;
};

export type CommentAllParams = APIListParams & { postId: string };
export type Comment = {
  _id: string;
  content: string;
  user: User;
  product: string;
  createdAt: string;
  updatedAt: string;
};
