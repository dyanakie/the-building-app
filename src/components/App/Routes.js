import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Homepage from "../page/Homepage/Homepage";
import Details from "../page/Details/Details";

const Routes = () => (
  <Switch>
    <Route exact path="/" render={(props) => <Homepage {...props} />} />
    <Route
      exact
      path="/details"
      render={(props) => <Details {...props} />}
    />
    <Route exact path="*" render={() => <NotFound />} />
  </Switch>
);

export default Routes;
