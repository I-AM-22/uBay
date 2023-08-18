export type User = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: string;
  favoriteCategories: any[];
  favoriteCities: any[];
  createdAt: Date;
  updatedAt: Date;
  wallet: Wallet;
  id: string;
};

export type Wallet = {
  _id: string;
  user: string;
  total: number;
  pending: number;
  createdAt: Date;
  updatedAt: Date;
  available: number;
  id: string;
};

export type UserEditBody = {
  name: string;
  email: string;
  photo?: File;
};
