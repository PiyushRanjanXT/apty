import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import jsCookie from "js-cookie";

export const isLogin = () => jsCookie.get('login') === 'true';

const AuthenticatedRoute = ({ children, ...rest }) => {
    const location = useLocation();

    return (
        <Route {...rest}>
            {isLogin()
                ? children
                : <Redirect to={{ pathname: "/login", state: { from: location } }} />
            }
        </Route>
    );
};

export default AuthenticatedRoute;