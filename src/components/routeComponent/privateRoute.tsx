import React, { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { globalContext } from "../../store/context/global.context";

import { checkToken } from "../../utils/utils";

const RouteAuthenticated = ({
  component: Component,
  path,
  exact,
}: RouteProps) => {
  const { state } = useContext(globalContext);
  if (!checkToken(state.user.token)) {
    return <Redirect to="/login" />;
  }

  return <Route component={Component} path={path} exact={exact} />;
};

export default RouteAuthenticated;
