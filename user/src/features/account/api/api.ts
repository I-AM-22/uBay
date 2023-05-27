import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { User } from "./type";

const API = {
  profile: async () => {
    const { data } = await axios.get<{ data: { data: User } }>(API_ROUTES.USERS.ME);
    return data.data.data;
  },
  update: async () => {
    const { data } = await axios.delete(API_ROUTES.USERS.ME);
    return data;
  },
  delete: async () => {
    const { data } = await axios.delete(API_ROUTES.USERS.ME);
    return data;
  },
};

export default API;
