import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/login";
import Main from "./pages/main/main";
import Register from "./pages/register/register";
import PublicRoute from "./components/routeComponent/publicRoute";
import PrivateRoute from "./components/routeComponent/privateRoute";
function App() {
  return (
    <div className="App">
      <Switch>
        <PublicRoute component={Login} path="/login" />
        <PublicRoute component={Register} path="/register" />
        <PrivateRoute component={Main} path="/" exact />
      </Switch>
    </div>
  );
}

export default App;
