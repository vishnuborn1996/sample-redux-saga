import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";
import App from "./components/App";

const AppRouter = (props) => {
  return (
    <Switch>
      <Route path="/" exact component={App}></Route>
      <Route path="/login" exact component={LoginPage}></Route>
      <Route path="/register" exact component={RegisterPage}></Route>
    </Switch>
  );
};

export default AppRouter;
