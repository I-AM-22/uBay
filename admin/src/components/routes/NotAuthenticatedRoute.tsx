import { Navigate, Outlet } from "react-router-dom";

const NotAuthenticatedRoute = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};
export default NotAuthenticatedRoute;
