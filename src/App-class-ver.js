import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import AppBar from "./components/AppBar";
import authOperations from "./redux/auth/auth-operations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import("./views/HomeView"));
const LoginView = lazy(() => import("./views/LoginView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const ContactsView = lazy(() => import("./views/ContactsView"));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <PublicRoute path="/register" redirectTo="/contacts" restricted>
              <Route path="/register" component={RegisterView} />
            </PublicRoute>
            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <Route path="/login" component={LoginView} />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <Route path="/contacts" component={ContactsView} />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProrps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProrps)(App);
