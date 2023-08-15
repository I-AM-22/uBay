import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { APIList, APIListParams, WithId } from "types/api";
import {
  Admin,
  AdminAction,
  AdminActionBody,
  AdminDetails,
  AdminLogin,
  AdminLoginBody,
} from "./type";

const API = {
  login: async (body: AdminLoginBody) => {
    const { data } = await axios.post<AdminLogin>(API_ROUTES.ADMINS.LOGIN, body);
    return data;
  },
  add: async (body: AdminActionBody) => {
    const { data } = await axios.post<AdminAction>(API_ROUTES.ADMINS.ADD, body);
    return data;
  },
  getAll: async (params: APIListParams) => {
    const { data } = await axios.get<APIList<Admin>>(API_ROUTES.ADMINS.GET_ALL, { params });
    return data;
  },
  get: async (id: string) => {
    const { data } = await axios.get<AdminDetails>(API_ROUTES.ADMINS.GET(id));
    return data;
  },
  edit: async ({ _id: id, ...body }: WithId<AdminLoginBody>) => {
    const { data } = await axios.patch<AdminAction>(API_ROUTES.ADMINS.EDIT(id), body);
    return data;
  },
  remove: async (id: string) => {
    const { data } = await axios.delete(API_ROUTES.ADMINS.DELETE(id));
    return data;
  },
};

export default API;
