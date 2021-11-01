import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { privateRoutes, publicRoutes, RouteNames } from "./routesNames";
import { useTypedSelector } from "../hooks/UseTypedSelector";

const Routes = () => {
  const { isAuth } = useTypedSelector((state) => state.authReducer);

  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={route.path}
          />
        );
      })}
      <Redirect to={RouteNames.EVENT} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={route.path}
          />
        );
      })}
      <Redirect to={RouteNames.LOGIN} />
    </Switch>
  );
};

export default Routes;
