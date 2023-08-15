export type Category = {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};
export type CategorySelect = Pick<Category, "_id" | "name">;
