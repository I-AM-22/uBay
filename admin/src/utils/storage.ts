import { Role } from "features/admin";
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
  setLanguage(language: string) {
    localStorage.setItem("language", language);
  },
  getLanguage() {
    return localStorage.getItem("language");
  },
  setRole(role: Role) {
    localStorage.setItem("role", role);
  },
  getRole(): Role {
    return localStorage.getItem("role") as Role;
  },
};
