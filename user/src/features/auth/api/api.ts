import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import {
  UserForgotPasswordBody,
  UserLogin,
  UserLoginBody,
  UserResetPassword,
  UserResetPasswordBody,
  UserSignup,
  UserSignupBody,
  UserUpdatePassword,
  UserUpdatePasswordBody,
} from "./type";

const API = {
  signup: async (body: UserSignupBody) => {
    const { data } = await axios.post<UserSignup>(API_ROUTES.USERS.SIGNUP, body);
    return data;
  },
  login: async (body: UserLoginBody) => {
    const { data } = await axios.post<UserLogin>(API_ROUTES.USERS.LOGIN, body);
    return data;
  },
  forgotPassword: async (body: UserForgotPasswordBody) => {
    const { data } = await axios.post(API_ROUTES.USERS.FORGOT_PASSWORD, body);
    return data;
  },
  resetPassword: async (body: UserResetPasswordBody) => {
    const { data } = await axios.patch<UserResetPassword>(API_ROUTES.USERS.RESET_PASSWORD, body);
    return data;
  },
  updatePassword: async (body: UserUpdatePasswordBody) => {
    const { data } = await axios.patch<UserUpdatePassword>(
      API_ROUTES.USERS.UPDATE_MY_PASSWORD,
      body
    );
    return data;
  },
};

export default API;
