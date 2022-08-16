import type { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "store";
import { authSelector } from "store/selectors/auth";



interface ProtectedRouteProps {
    element: ReactElement;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
    const isAuth = useAppSelector(authSelector);
    return !isAuth ? <Navigate to="/" /> : element;
};

export default ProtectedRoute;