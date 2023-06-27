import { APIListParams } from "types/api";

export type EmployeeAllParams = APIListParams;

export type Employee = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  store: string;
  address: string;
  phone_number: string;
  work_time: string;
  createdAt: string;
  updatedAt: string;
  role: string;
  id: string;
};

export type EmployeeDetails = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};

export type AdminActionBody = { name: string; email: string; password: string };
export type EmployeeActionBody = {
  name: string;
  photo?: File;
  email: string;
  password: string;
  store: string;
  address: string;
  phone_number: string;
  work_time: string;
};
