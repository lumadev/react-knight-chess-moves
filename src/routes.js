import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Wizard from "../src/components/Wizard/Wizard";
import Chess from "../src/components/Chess/Chess";


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/game" component={Chess} />
      <Route path="/" component={Wizard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
