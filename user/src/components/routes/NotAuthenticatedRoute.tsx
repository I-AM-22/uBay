import { Navigate, Outlet } from "react-router-dom";
import { storage } from "utils/storage";

const NotAuthenticatedRoute = () => {
  const token = storage.getToken();
  if (!token) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};
export default NotAuthenticatedRoute;
