import { APIListParams } from "types/api";

export type AdminAllParams = APIListParams;
export type AdminLoginBody = {
  email: string;
  password: string;
};
export type AdminLogin = {
  token: string;
  user: Admin;
};

export type Admin = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: Role;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

export type AdminDetails = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
};

export type AdminActionBody = { name: string; email: string; password: string };
export type AdminAction = {
  name: string;
  email: string;
  photo: string;
  role: Role;
  active: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
};
export type Role = "admin" | "superadmin";
