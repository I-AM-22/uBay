import { Profile } from "features/auth";
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
  setUser(user: Profile | null) {
    if (!user) localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(user));
  },
  getUser() {
    try {
      const user = localStorage.getItem("user");
      if (!user) return null;
      return JSON.parse(user) as Profile;
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
