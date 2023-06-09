import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { UserLogin, UserLoginBody } from "./type";

const API = {
  login: async (body: UserLoginBody) => {
    const { data } = await axios.post<UserLogin>(API_ROUTES.ADMINS.LOGIN, body);
    return data;
  },
};

export default API;
