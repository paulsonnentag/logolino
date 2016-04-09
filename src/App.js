import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Home } from './home';
import { FarmGame } from './farm-game';

require('buzz/dist/buzz');
require('../style/app.scss');

export class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/bauernhof" component={FarmGame}/>
      </Router>
    );
  }
}
