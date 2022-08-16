import type { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/route/protected.route";
import routes from "constants/routes";



const AppRouter: FC = () =>
    <Routes>
        {routes.map(({ path, Element, isNeedAuth }) =>
            <Route key={path} path={path} element={isNeedAuth ? <ProtectedRoute element={<Element />} /> : <Element />} />
        )}
        <Route path="*" element={<Navigate to="/login" />} />
    </Routes>;

export default AppRouter;
