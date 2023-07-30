export type Store = {
  _id: string;
  name: string;
  address: string;
  city: {
    _id: string;
    name: string;
    id: string;
  };
  createdAt: string;
  updatedAt: string;
  id: string;
};
export type StoreSelect = Pick<Store, "id" | "name" | "city">;
