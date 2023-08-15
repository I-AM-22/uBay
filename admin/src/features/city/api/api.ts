import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { APIList, WithId } from "types/api";
import { paginateParams } from "utils/apiHelpers";
import { City, CityAction, CityAllParams, CitySelect } from "./type";

const API = {
  add: async (body: CityAction) => {
    const { data } = await axios.post(API_ROUTES.CITIES.ADD, body);
    return data;
  },
  getAll: async (params: CityAllParams) => {
    const { data } = await axios.get<APIList<City>>(API_ROUTES.CITIES.GET_ALL, {
      params: paginateParams(params),
    });
    return data;
  },
  get: async (id: string) => {
    const { data } = await axios.get<City>(API_ROUTES.CITIES.GET(id));
    return data;
  },
  select: async () => {
    const { data } = await axios.get<APIList<CitySelect>>(API_ROUTES.CITIES.GET_ALL, {
      params: { fields: "name" },
    });
    return data.data;
  },
  edit: async ({ _id: id, ...body }: WithId<CityAction>) => {
    const { data } = await axios.patch<City>(API_ROUTES.CITIES.EDIT(id), body);
    return data;
  },
  remove: async (id: string) => {
    const { data } = await axios.delete(API_ROUTES.CITIES.DELETE(id));
    return data;
  },
};

export default API;
