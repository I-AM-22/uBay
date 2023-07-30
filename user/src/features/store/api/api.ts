import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { StoreSelect } from "./type";

const API = {
  select: async () => {
    const { data } = await axios.get<{ data: StoreSelect[] }>(API_ROUTES.STORES.GET_ALL, {
      params: { fields: "name, city" },
    });
    return data.data;
  },
};

export default API;
