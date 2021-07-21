import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { useAuth } from '../../lib/auth';
import routes from './../../routes';

export const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const { isLoggedIn, isLoading } = useAuth();
  const { path, exact, component } = props;

  if (isLoading) {
    return null;
  }
  return isLoggedIn ? <Route path={path} exact={exact} component={component} /> : <Redirect to={routes.LOGIN} />;
};

export default PrivateRoute;
