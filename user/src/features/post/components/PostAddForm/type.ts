export type Form = {
  title: string;
  content: string;
  photos: File[];
  price: number;
  category: { _id: string; name: string } | null;
  store: { _id: string; name: string } | null;
};
