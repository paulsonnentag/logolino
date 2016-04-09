import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Home } from './home';
import { FarmGame } from './farm-game';

import '../style/app.scss';

export class App extends Component {

  constructor (props) {
    super(props);
    this.state = {counter: 1 };
  }

  inc () {
    this.setState({counter : this.state.counter + 1 });
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/bauernhof" component={FarmGame}/>
      </Router>
    );
  }
}
