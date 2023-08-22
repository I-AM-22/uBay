import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { objectToFormData } from "utils/transforms";
import { FavoriteUpdate, User, UserEditBody } from "./type";

const API = {
  profile: async () => {
    const { data } = await axios.get<User>(API_ROUTES.USERS.ME);
    return data;
  },
  edit: async (body: UserEditBody) => {
    const { data } = await axios.patch<User>(API_ROUTES.USERS.ME, objectToFormData(body));
    return data;
  },
  updateFavorite: async (body: FavoriteUpdate) => {
    const { data } = await axios.patch(API_ROUTES.USERS.FAVORITES, body);
    return data;
  },
};

export default API;
