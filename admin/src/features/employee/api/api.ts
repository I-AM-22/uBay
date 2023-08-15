import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { APIList, APIListParams, WithId } from "types/api";
import { objectToFormData } from "utils/transforms";
import { Employee, EmployeeAddBody, EmployeeDetails, EmployeeEditBody } from "./type";

const API = {
  add: async (body: EmployeeAddBody) => {
    const { data } = await axios.post(API_ROUTES.EMPLOYEES.ADD, objectToFormData(body));
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
  edit: async ({ _id: id, ...body }: WithId<EmployeeEditBody>) => {
    const { data } = await axios.patch(API_ROUTES.EMPLOYEES.EDIT(id), objectToFormData(body));
    return data;
  },
  remove: async (id: string) => {
    const { data } = await axios.delete(API_ROUTES.EMPLOYEES.DELETE(id));
    return data;
  },
};

export default API;
