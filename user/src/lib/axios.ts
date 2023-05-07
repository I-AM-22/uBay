import ax from "axios";
import { API_BASE_URL } from "constants/domain";
import i18n from "lib/i18next";
let token = localStorage.getItem("token");
const axios = ax.create({
  baseURL: API_BASE_URL,
});
axios.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers = {
        "accept-language": i18n.language,
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
export function refreshAxiosToken() {
  token = localStorage.getItem("token");
}
axios.interceptors.response.use((response) => response);
export default axios;
