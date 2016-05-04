import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Loader } from './loader-view';
import { Home } from './home';
import { FarmGame } from './farm-game';
import Info from './info';
import { loader } from './loader';

import '../style/app.scss';

export class App extends Component {

  constructor () {
    super();
    this.state = { progress : 0 };

    loader([
      '../images/animals/cat.svg',
      '../images/animals/cow.svg',
      '../images/animals/dog.svg',
      '../images/animals/donkey.svg',
      '../images/animals/duck.svg',
      '../images/animals/goat.svg',
      '../images/animals/goose.svg',
      '../images/animals/horse.svg',
      '../images/animals/mouse.svg',
      '../images/animals/pig.svg',
      '../images/animals/rabbit.svg',
      '../images/animals/rooster.svg',
      '../images/animals/sheep.svg',
      '../images/barn/green-barn.png',
      '../images/barn/yellow-barn.png',
      '../images/barn/blue-barn.png',
      '../images/sign.svg'
    ], (percentage) => {
      this.setState({progress : percentage})
    });
  }

  render() {
    const { progress } = this.state;

    return (
      <Loader progress={progress}>
        <Router history={browserHistory}>
          <Route path="/" component={Home}/>
          <Route path="/bauernhof" component={FarmGame}/>
          <Route path="/info" component={Info}/>
        </Router>
      </Loader>
    );
  }
}
