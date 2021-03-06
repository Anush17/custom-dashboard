import React, { lazy } from 'react';
import { withTranslation } from 'react-i18next';
import { Route, Switch, Redirect } from 'react-router-dom';

import NotFound from "../pages/NotFound";
import PrivateRoute from './Private';
import PublicRoute from "./Public";

const Users = lazy(() => import('../components/Users'));
const Posts = lazy(() => import('../components/Posts'));
const Login = lazy(() => import('../pages/Login'));

const Routes = ({ t }) => {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={Users} title={t('users')} />
            <PublicRoute exact path="/login" component={Login} title={t('login')} />
            <PrivateRoute exact path="/posts" component={Posts} title={t('posts')} />
            <Route title={t('notFound')} component={NotFound}/>
        </Switch>
    );
}
export default withTranslation()(Routes);
