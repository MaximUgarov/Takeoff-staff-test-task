import type { FC } from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/route/protected";
import routes from "constants/routes";
import NotFound from "view/notFound";



const AppRouter: FC = () =>
    <Routes>
        {routes.map(({ path, Element, isNeedAuth }) =>
            <Route key={path} path={path} element={isNeedAuth ? <ProtectedRoute element={<Element />} /> : <Element />} />
        )}
        <Route path="*" element={<NotFound />} />
    </Routes>;

export default AppRouter;
