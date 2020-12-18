import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/login";
import Main from "./pages/main/main";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
