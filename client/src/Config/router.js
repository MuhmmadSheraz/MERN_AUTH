import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Form from "../Views/Form/Index.js";
import Home from "../Views/Home/index.js";
import Loading from "../Views/Loading/index.js";
import ProtectedRoute from "./ProtectedRoute.js";
export default function RouterMain() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Form}>
          {localStorage.getItem("user") ? <Redirect to="/home" /> : <Form />}
        </Route>
        <ProtectedRoute exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}
