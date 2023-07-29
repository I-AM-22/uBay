import ax from "axios";
import { API_BASE_URL } from "constants/domain";
let token = localStorage.getItem("token");
const axios = ax.create({
  baseURL: API_BASE_URL,
});
axios.interceptors.request.use(
  (config) => {
    config.headers["Accept"] = `*/*`;
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
axios.interceptors.response.use((res) => {
  return res;
});
export function refreshAxiosToken() {
  token = localStorage.getItem("token");
}
export default axios;
