import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { APIList } from "types/api";
import { paginateParams } from "utils/apiHelpers";
import { objectToFormData } from "utils/transforms";
import { Post, PostAllParams, PostBody } from "./type";

const API = {
  post: async (body: PostBody) => {
    const { data } = await axios.post<Post>(API_ROUTES.PRODUCTS.POST, objectToFormData(body));
    return data;
  },
  getAll: async (params: PostAllParams) => {
    const { data } = await axios.get<APIList<Post>>(API_ROUTES.PRODUCTS.GET_ALL, {
      params: paginateParams(params),
    });
    return data;
  },
  get: async (id: string) => {
    const { data } = await axios.get<Post>(API_ROUTES.PRODUCTS.GET(id), {});
    return data;
  },
};

export default API;
