import { StoreSelect } from "features/store";

export type Form = {
  title: string;
  content: string;
  photos?: File[];
  price: number;
  category: { id: string; name: string } | null;
  store: StoreSelect | null;
};
