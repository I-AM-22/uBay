export type Store = {
  _id: string;
  name: string;
  address: string;
  city: {
    _id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
};
export type StoreSelect = Pick<Store, "_id" | "name" | "city">;
