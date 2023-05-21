import { Navigate, Outlet } from "react-router-dom";
import { storage } from "utils/storage";

const AuthenticatedRoute = () => {
  const token = storage.getToken();
  if (token) {
    return <Outlet />;
  }
  return <Navigate to="/registration" />;
};
export default AuthenticatedRoute;
