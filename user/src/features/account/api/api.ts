import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { objectToFormData } from "utils/transforms";
import { User, UserEditBody } from "./type";

const API = {
  profile: async () => {
    const { data } = await axios.get<User>(API_ROUTES.USERS.ME);
    return data;
  },
  edit: async (body: UserEditBody) => {
    const { data } = await axios.patch<User>(API_ROUTES.USERS.ME, objectToFormData(body));
    return data;
  },
  remove: async () => {
    const { data } = await axios.delete(API_ROUTES.USERS.ME);
    return data;
  },
};

export default API;
