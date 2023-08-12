import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { DiscountCreateBody } from "./type";

const API = {
  create: async (body: DiscountCreateBody) => {
    const { data } = await axios.post(API_ROUTES.COUPON.CREATE, body);
    return data;
  },
  getByProduct: async (productId: string) => {
    const { data } = await axios.get(API_ROUTES.COUPON.BY_PRODUCT(productId));
    return data;
  },
};

export default API;
