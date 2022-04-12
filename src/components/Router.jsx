import React from 'react'
import { Route, Switch } from "react-router-dom";
import PostContainer from './PostContainer';
import AuthenticatedRoute, { isLogin } from './AuthenticatedRoute';
import Login from './Login';

export const Router = () => {
    return (
        <Switch>
            <AuthenticatedRoute path="/" exact  >
                <PostContainer />
            </AuthenticatedRoute>
            {!isLogin() && (<Route path="/login" >
                <Login />
            </Route>)}

        </Switch>
    )
}
