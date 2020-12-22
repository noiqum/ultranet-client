import React, { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { globalContext } from "../../store/context/global.context";

import { checkToken } from "../../utils/utils";

const RouteUnauthenticated = ({ component: Component, path }: RouteProps) => {
  const { state } = useContext(globalContext);
  if (checkToken(state.user.token)) {
    return <Redirect to="/" />;
  }

  return <Route component={Component} path={path} />;
};

export default RouteUnauthenticated;
