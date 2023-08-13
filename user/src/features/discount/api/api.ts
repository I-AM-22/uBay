import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { DiscountCreateBody, DiscountProductList } from "./type";

const API = {
  create: async (body: DiscountCreateBody) => {
    const { data } = await axios.post(API_ROUTES.COUPON.CREATE, body);
    return data;
  },
  getByProduct: async (productId: string) => {
    const { data } = await axios.get<DiscountProductList>(API_ROUTES.PRODUCTS.COUPONS(productId));
    return data;
  },
  remove: async (id: string) => {
    const { data } = await axios.delete(API_ROUTES.COUPON.DELETE(id));
    return data;
  },
};

export default API;
