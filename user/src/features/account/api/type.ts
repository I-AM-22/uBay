export type User = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};
export type UserEditBody = {
  name: string;
  email: string;
  photo?: File;
};
