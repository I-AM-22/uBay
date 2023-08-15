import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { APIList, WithId } from "types/api";
import { paginateParams } from "utils/apiHelpers";
import { Comment, CommentAllParams, CommentBody } from "./type";

const API = {
  post: async (body: CommentBody) => {
    const { data } = await axios.post<Comment>(API_ROUTES.COMMENTS.POST, body);
    return data;
  },
  getAll: async ({ postId, ...params }: CommentAllParams) => {
    const { data } = await axios.get<APIList<Comment>>(API_ROUTES.PRODUCTS.COMMENTS(postId), {
      params: paginateParams(params),
    });
    return data;
  },
  get: async (id: string) => {
    const { data } = await axios.get<Comment>(API_ROUTES.COMMENTS.GET(id));
    return data;
  },
  edit: async ({ _id: id, ...body }: WithId<CommentBody>) => {
    const { data } = await axios.patch<Comment>(API_ROUTES.COMMENTS.EDIT(id), body);
    return data;
  },
  remove: async (id: string) => {
    const { data } = await axios.delete(API_ROUTES.COMMENTS.DELETE(id));
    return data;
  },
};

export default API;
