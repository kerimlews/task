import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Contact from 'pages/Contact';
import Home from 'pages/Home';

const Routes = () => (
  <Switch>
    <Route path="/contact" component={Contact} />
    <Route exact path="/home" component={Home} />
    <Redirect from="/" to="/home" />
  </Switch>
);

export default Routes;
