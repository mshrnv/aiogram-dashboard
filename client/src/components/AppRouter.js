import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../routes/index";

const AppRouter = () => {
    return (
        <Routes>
            {
                routes.map(route => (
                    <Route key={route.path} path={route.path} element={route.component} exact={route.exact}/>
                ))
            }
        </Routes>
    );
};

export default AppRouter;