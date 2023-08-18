import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { APIList } from "types/api";
import { paginateParams } from "utils/apiHelpers";
import { User, UserAllParams, WalletChargeBody } from "./type";

const API = {
  getAll: async (params: UserAllParams) => {
    const { data } = await axios.get<APIList<User>>(API_ROUTES.USERS.GET_ALL, {
      params: paginateParams(params),
    });
    return data;
  },
  get: async (id: string) => {
    const { data } = await axios.get<User>(API_ROUTES.USERS.GET(id));
    return data;
  },
  remove: async (id: string) => {
    const { data } = await axios.delete(API_ROUTES.USERS.DELETE(id));
    return data;
  },
  deposit: async (body: WalletChargeBody) => {
    const { data } = await axios.post(API_ROUTES.WALLET.CHARGE, body);
    return data;
  },
};

export default API;
