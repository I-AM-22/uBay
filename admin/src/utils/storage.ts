import { refreshAxiosToken } from "lib/axios";
import Cookies from 'js-cookie';

export const storage = {
  storeToken(token: string) {
    Cookies.set("token", token,);
    refreshAxiosToken();
  },
  clearToken() {
    localStorage.setItem("token", "");
    refreshAxiosToken();
  },
  getToken() {
    return localStorage.getItem("token");
  },
  setLanguage(language: string) {
    localStorage.setItem("language", language);
  },
  getLanguage() {
    return localStorage.getItem("language");
  },
};
