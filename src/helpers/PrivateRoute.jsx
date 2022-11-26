import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export function PrivateRoute({ children }){
    const { login } = useAuth();
    const location = useLocation();
    return login ? children : <Navigate to="/login" state={{ from: location }}/>
}