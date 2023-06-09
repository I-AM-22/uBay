export type PostForm = {
  content: string;
  photos: File[];
  price: number;
  category: { id: string; name: string } | null;
};
