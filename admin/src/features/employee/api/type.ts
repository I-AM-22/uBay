import { Warehouse } from "features/warehouse";
import { APIListParams } from "types/api";

export type EmployeeAllParams = APIListParams;

export type Employee = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  store: Warehouse;
  address: string;
  createdAt: string;
  updatedAt: string;
  role: string;
};

export type EmployeeDetails = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  store: Warehouse;
  address: string;
  createdAt: string;
  updatedAt: string;
  role: string;
};

export type EmployeeAddBody = {
  name: string;
  photo?: File;
  email: string;
  password: string;
  store: string;
  address: string;
};

export type EmployeeEditBody = {
  name: string;
  email: string;
  store: string;
  address: string;
  password?: string;
  photo?: File;
};
