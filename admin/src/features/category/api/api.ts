import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { WithId } from "types/api";
import { Category, CategoryAction } from "./type";

const API = {
  add: async (body: CategoryAction) => {
    const { data } = await axios.post(API_ROUTES.CATEGORIES.ADD, body);
    return data;
  },
  getAll: async (params: { search?: string }) => {
    const { data } = await axios.get<{ data: Category[] }>(API_ROUTES.CATEGORIES.GET_ALL, {
      params,
    });
    return data.data;
  },
  get: async (id: string) => {
    const { data } = await axios.get<{ data: Category }>(API_ROUTES.CATEGORIES.GET(id));
    return data.data;
  },
  edit: async ({ id, ...body }: WithId<CategoryAction>) => {
    const { data } = await axios.patch<{ data: Category }>(API_ROUTES.CATEGORIES.EDIT(id), body);
    return data.data;
  },
  remove: async (id: string) => {
    const { data } = await axios.delete<{ data: Category }>(API_ROUTES.CATEGORIES.DELETE(id));
    return data.data;
  },
};

export default API;
