import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { UserLogin, UserLoginBody, UserSignup, UserSignupBody } from "./type";

const API = {
  signup: async (body: UserSignupBody) => {
    const { data } = await axios.post<UserSignup>(API_ROUTES.USERS.SIGNUP, body);
    return data;
  },
  login: async (body: UserLoginBody) => {
    const { data } = await axios.post<UserLogin>(API_ROUTES.USERS.LOGIN, body);
    return data;
  },
};

export default API;
