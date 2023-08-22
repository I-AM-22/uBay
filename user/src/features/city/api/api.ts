import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { APIList } from "types/api";
import { CitySelect } from "./type";

const API = {
  select: async () => {
    const { data } = await axios.get<APIList<CitySelect>>(API_ROUTES.CITIES.GET_ALL, {
      params: { fields: "name" },
    });
    return data.data;
  },
};

export default API;
