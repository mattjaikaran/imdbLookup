import React from 'react';
import App from '../App';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from '../containers/Home';
import About from '../containers/About';
import Contact from '../containers/Contact';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="about" component={About}></Route>
      <Route path="contact" component={Contact}></Route>
    </Route>
  </Router>
);

export default routes;
