import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { PaymentDetails, PaymentPostBody } from "./type";

const API = {
  buy: async (body: PaymentPostBody) => {
    const { data } = await axios.post(API_ROUTES.PAYMENTS.POST, body);
    return data;
  },
  get: async (id: string) => {
    const { data } = await axios.get<PaymentDetails>(API_ROUTES.PAYMENTS.GET(id));
    return data;
  },
};

export default API;
