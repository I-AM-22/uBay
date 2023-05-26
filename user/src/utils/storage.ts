import { MyData } from "features/auth";
import { refreshAxiosToken } from "lib/axios";

export const storage = {
  setToken(token: string) {
    localStorage.setItem("token", token);
    refreshAxiosToken();
  },
  clearToken() {
    localStorage.setItem("token", "");
    refreshAxiosToken();
  },
  getToken() {
    return localStorage.getItem("token");
  },
  setUser(user: MyData) {
    localStorage.setItem("user", JSON.stringify(user));
  },
  getUser() {
    try {
      return JSON.parse(localStorage.get("user")) as MyData;
    } catch {
      console.error(localStorage.getItem("user") + " cannot be parsed");
    }
  },
  setLanguage(language: string) {
    localStorage.setItem("language", language);
  },
  getLanguage() {
    return localStorage.getItem("language");
  },
};
