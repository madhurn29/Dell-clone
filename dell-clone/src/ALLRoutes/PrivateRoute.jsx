import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/signin" />;
  }

  return children;
}

export default PrivateRoute;
