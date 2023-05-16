import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { UserLogin, UserLoginBody } from "./type";

const API = {
  signup: async (body: {}) => {
    const { data } = await axios.post<{}>(API_ROUTES.USERS.SIGNUP, body);
    return data;
  },
  login: async (body: UserLoginBody) => {
    const { data } = await axios.post<UserLogin>(API_ROUTES.USERS.LOGIN, body);
    return data;
  },
};

export default API;
