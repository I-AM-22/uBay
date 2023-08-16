import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { APIList, WithId } from "types/api";
import { paginateParams } from "utils/apiHelpers";
import { objectToFormData } from "utils/transforms";
import { Post, PostAllParams, PostBody, PostMine, PostMineParams } from "./type";

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
    const { data } = await axios.get<Post>(API_ROUTES.PRODUCTS.GET(id));
    return data;
  },
  edit: async ({ _id: id, ...body }: WithId<PostBody>) => {
    const { data } = await axios.patch(API_ROUTES.PRODUCTS.EDIT(id), objectToFormData(body));
    return data;
  },
  remove: async (id: string) => {
    const { data } = await axios.delete(API_ROUTES.PRODUCTS.DELETE(id));
    return data;
  },
  like: async (id: string) => {
    const { data } = await axios.post(API_ROUTES.PRODUCTS.LIKE(id));
    return data;
  },
  unlike: async (id: string) => {
    const { data } = await axios.delete(API_ROUTES.PRODUCTS.UNLIKE(id));
    return data;
  },
  mine: async (params: PostMineParams) => {
    const { data } = await axios.get<PostMine>(API_ROUTES.PRODUCTS.MINE, {
      params,
    });
    return data;
  },
};

export default API;
