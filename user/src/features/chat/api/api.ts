import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { APIList } from "types/api";
import { ChatAddBody, ChatDetails, Chats, Message, MessagePost } from "./type";

const API = {
  post: async (body: ChatAddBody) => {
    const { data } = await axios.post(API_ROUTES.CHATS.ADD, body);
    return data;
  },
  getAll: async () => {
    const { data } = await axios.get<Chats>(API_ROUTES.CHATS.GET_ALL);
    return data.data;
  },
  get: async (id: string) => {
    const { data } = await axios.get<ChatDetails>(API_ROUTES.CHATS.GET(id));
    return data;
  },
  postMessage: async (body: MessagePost) => {
    const { data } = await axios.post<Message>(API_ROUTES.MESSAGES.ADD(body.chat), body);
    return data;
  },
  getMessages: async (id: string) => {
    const { data } = await axios.get<APIList<Message>>(API_ROUTES.MESSAGES.GET_ALL(id));
    return data.data;
  },
};

export default API;
