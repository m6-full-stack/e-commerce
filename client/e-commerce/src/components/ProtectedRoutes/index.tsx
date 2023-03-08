import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserProvider/UserProvider";

export const ProtectedRoutes = () => {
  const { isLoaded } = useContext(UserContext);

  return isLoaded ? <Outlet /> : <Navigate to="/" replace />    
};
