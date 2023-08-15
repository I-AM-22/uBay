import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { APIList, WithId } from "types/api";
import { paginateParams } from "utils/apiHelpers";
import { Warehouse, WarehouseAction, WarehouseAllParams, WarehouseSelect } from "./type";

const API = {
  add: async (body: WarehouseAction) => {
    const { data } = await axios.post(API_ROUTES.STORES.ADD, body);
    return data;
  },
  getAll: async (params: WarehouseAllParams) => {
    const { data } = await axios.get<APIList<Warehouse>>(API_ROUTES.STORES.GET_ALL, {
      params: paginateParams(params),
    });
    return data;
  },
  select: async () => {
    const { data } = await axios.get<APIList<WarehouseSelect>>(API_ROUTES.STORES.GET_ALL, {
      params: { fields: "name" },
    });
    return data.data;
  },
  get: async (id: string) => {
    const { data } = await axios.get<Warehouse>(API_ROUTES.STORES.GET(id));
    return data;
  },
  edit: async ({ _id: id, ...body }: WithId<WarehouseAction>) => {
    const { data } = await axios.patch<Warehouse>(API_ROUTES.STORES.EDIT(id), body);
    return data;
  },
  remove: async (id: string) => {
    const { data } = await axios.delete(API_ROUTES.STORES.DELETE(id));
    return data;
  },
};

export default API;
