import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};
export default ProtectedRoute;
