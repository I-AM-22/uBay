export type PostForm = {
  title: string;
  content: string;
  photos: File[];
  price: number;
  category: { id: string; name: string } | null;
};
