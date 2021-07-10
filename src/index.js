import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Language from "./pages/Language";
import Notfound from "./pages/Notfound"

import "./index.css";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/l/:language" component={Language}></Route>
      <Route path="/Notfound" component={Notfound}></Route>
      <Route path="/" component={Home}></Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
