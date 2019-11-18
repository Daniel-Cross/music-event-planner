import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/root.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/event/:eventId" component={App} />
      <Route exact={true} path="/artist/:artistId" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
