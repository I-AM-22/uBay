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
  store: string;
  address: string;
  phone_number: string;
  work_time: string;
  createdAt: string;
  updatedAt: string;
  role: string;
  id: string;
};

export type EmployeeAddBody = {
  name: string;
  photo?: File;
  email: string;
  password: string;
  store: string;
  address: string;
  phone_number: string;
  work_time: string;
};

export type EmployeeEditBody = {
  name: string;
  email: string;
  store: string;
  address: string;
  phone_number: string;
  work_time: string;
  password?: string;
  photo?: File;
};
