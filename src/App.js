import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Loader } from './loader-view';
import { Home } from './home';
import { FarmGame } from './farm-game';
import { loader } from './loader';

require('../style/app.scss');

export class App extends Component {

  constructor () {
    super();
    this.state = { progress : 0 };

    loader([
      '../images/animals/cat.png',
      '../images/animals/cow.png',
      '../images/animals/dog.png',
      '../images/animals/donkey.png',
      '../images/animals/duck.png',
      '../images/animals/goat.png',
      '../images/animals/goose.png',
      '../images/animals/horse.png',
      '../images/animals/mouse.png',
      '../images/animals/pig.png',
      '../images/animals/rabbit.png',
      '../images/animals/rooster.png',
      '../images/animals/sheep.png',
      '../images/barn/green-barn.png',
      '../images/barn/green-door.png',
      '../images/barn/yellow-barn.png',
      '../images/barn/yellow-door.png',
      '../images/barn/blue-barn.png',
      '../images/barn/blue-door.png',
      '../images/sign.png'
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
        </Router>
      </Loader>
    );
  }
}
