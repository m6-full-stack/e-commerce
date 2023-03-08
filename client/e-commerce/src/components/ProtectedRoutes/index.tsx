import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserProvider/UserProvider";

export const ProtectedRoutes = () => {
  const { user, isLoaded } = useContext(UserContext);

  if (isLoaded) {
    return (
      <>
        <h3>Carregando...</h3>
      </>
    );
  }

  return user ? <Outlet /> : <Navigate to="/" replace />    
};
