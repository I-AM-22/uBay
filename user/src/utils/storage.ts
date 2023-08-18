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
  getChatTab() {
    return Number(localStorage.getItem("chatTab") ?? 0);
  },
  setChatTab(tab: number) {
    return localStorage.setItem("chatTab", String(tab));
  },
  getTransactionsTab() {
    return Number(localStorage.getItem("transactionsTab") ?? 0);
  },
  setTransactionsTab(tab: number) {
    return localStorage.setItem("transactionsTab", String(tab));
  },
};
