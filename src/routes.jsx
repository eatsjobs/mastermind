import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Game, Home, GameOver } from './screens';
const Routes = (
  <Router basename={process.env.PUBLIC_URL}>
    <Route exact path='/' component={Home} />
    <Route path='/play' component={Game} />
    <Route path='/gameover' component={GameOver} />
  </Router>
);

export default Routes;