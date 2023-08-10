export type Category = {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};
export type CategorySelect = Pick<Category, "id" | "name">;
