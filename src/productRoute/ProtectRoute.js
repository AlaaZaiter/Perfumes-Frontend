import { Navigate } from "react-router-dom";
import { getUserRole } from "../Util/GetUserData";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const isAuthenticated = sessionStorage.getItem("authToken");
  const userRole = getUserRole();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (adminOnly && (userRole !== "admin" && userRole !== "seller")) {
    return <Navigate to="/noAccess" />;
  }

  return children;
};

export default ProtectedRoute;
