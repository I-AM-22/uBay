import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { Statics } from "./type";

const API = {
  getStatics: async () => {
    const { data } = await axios.get<Statics>(API_ROUTES.STATICS.GET);
    return data;
  },
};

export default API;
