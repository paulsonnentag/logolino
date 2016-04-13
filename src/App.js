import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Loader } from './loader-view';
import { Home } from './home';
import { FarmGame } from './farm-game';

require('../style/app.scss');

export class App extends Component {

  constructor () {
    super();
    this.state = { progress : 0 };
  }

  render() {
    const { progress } = this.state;

    return (
      <Loader progress={progress}>
        <Router history={browserHistory}>
          <Route path="/" component={Home}/>
          <Route path="/bauernhof" component={FarmGame}/>
        </Router>
      </Loader>
    );
  }
}
