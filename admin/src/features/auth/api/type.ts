export type UserLoginBody = {
  email: string;
  password: string;
};
export type UserSignupBody = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export type Admin = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};
export type UserLogin = {
  token: string;
  user: Admin;
};
