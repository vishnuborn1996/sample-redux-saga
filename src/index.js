import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { Router, withRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import firebase from "firebase";
import { history } from "./utils/history";
import { Provider, connect } from "react-redux";
import { store } from "./store/index";
import { setUser, clearUser } from "./actions/userActions";
import Spinner from "./Spinner";

const mapStateToProps = (state) => {
  return {
    isLoading: state.user.isLoading,
  };
};

const Root = (props) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        props.setUser(user);
        history.push("/");
      } else {
        props.clearUser();
        history.push("/login");
      }
    });
  }, []);

  return props.isLoading ? <Spinner /> : <AppRouter />;
};

const RootWithAuth = connect(mapStateToProps, { setUser, clearUser })(
  withRouter(Root)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <RootWithAuth />
    </Router>
  </Provider>,
  document.getElementById("root")
);
