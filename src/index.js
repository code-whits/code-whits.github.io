import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Language from "./pages/Language";
import Notfound from "./pages/Notfound"

import "./index.css";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/l/:language" component={Language}></Route>
      <Route path="/Notfound" component={Notfound} exact></Route>
      <Route path="/" component={Home} exact></Route>
      <Redirect from='/*' to='/Notfound' />
    </Switch>
  </Router>,
  document.getElementById("root")
);
