import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/loader/Loader";
import useAuth from "../hook/useAuth";

const PrivateRoute = ({children}) => {

    const { user, loading } = useAuth()

    // TRACK ON LOCATION
    const location = useLocation()

    if (loading){
        return <Loader />
    }

    if(user){
        return children
    }

        return <Navigate to={'/auth/login'}  state={{ from: location }} replace />
};

export default PrivateRoute;