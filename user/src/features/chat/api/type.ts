export type ChatAddBody = {
  name: string;
  product: string;
  user: string;
};

export type Chats = {
  result: number;
  data: Chat[];
};
export type Chat = {
  _id: string;
  name: string;
  customer: Customer;
  seller: Customer;
  product: Product;
};

export type Customer = {
  _id: string;
  name: string;
  photo: string;
  id: string;
  city: { _id: string; name: string };
};

export type Product = {
  _id: string;
  title: string;
  photos: string[];
  price: number;
  category: Category;
  store: Customer;
  id: string;
};

export type Category = {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};

export type ChatDetails = {
  _id: string;
  name: string;
  customer: Customer;
  seller: Customer;
  product: Product;
  createdAt: Date;
  updatedAt: Date;
  id: string;
};
export type Message = {
  _id: string;
  content: string;
  user: string;
  createdAt: string;
};
export type MessagePost = {
  content: string;
  chat: string;
  user: string;
};
