import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { APIList, APIListParams, WithId } from "types/api";
import { Employee, EmployeeActionBody, EmployeeDetails } from "./type";

const API = {
  add: async (body: EmployeeActionBody) => {
    const { data } = await axios.post(API_ROUTES.EMPLOYEES.ADD, body);
    return data;
  },
  getAll: async (params: APIListParams) => {
    const { data } = await axios.get<APIList<Employee>>(API_ROUTES.EMPLOYEES.GET_ALL, { params });
    return data;
  },
  get: async (id: string) => {
    const { data } = await axios.get<EmployeeDetails>(API_ROUTES.EMPLOYEES.GET(id));
    return data;
  },
  edit: async ({ id, ...body }: WithId<EmployeeActionBody>) => {
    const { data } = await axios.patch(API_ROUTES.EMPLOYEES.EDIT(id), body);
    return data;
  },
  remove: async (id: string) => {
    const { data } = await axios.delete(API_ROUTES.EMPLOYEES.DELETE(id));
    return data;
  },
};

export default API;
