import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { CategorySelect } from "./type";

const API = {
  select: async () => {
    const { data } = await axios.get<{ data: CategorySelect[] }>(API_ROUTES.CATEGORIES.GET_ALL, {
      params: { fields: "name" },
    });
    return data.data;
  },
};

export default API;
