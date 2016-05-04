import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import Loader from './loader';
import HomePage from './home-page';
import GamePage from './game-page';
import InfoPage from './info-page';
import loader from '../resources/loader';

import '../../style/app.scss';

export class App extends Component {

  constructor () {
    super();
    this.state = {progress: 0};

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
      '../images/barn/green-barn.svg',
      '../images/barn/yellow-barn.svg',
      '../images/barn/blue-barn.svg',
      '../images/sign.svg'
    ], (percentage) => {
      this.setState({progress: percentage})
    });
  }

  render () {
    const {progress} = this.state;

    return (
      <Loader progress={progress}>
        <Router history={browserHistory}>
          <Route path="/" component={HomePage}/>
          <Route path="/bauernhof" component={GamePage}/>
          <Route path="/info" component={InfoPage}/>
        </Router>
      </Loader>
    );
  }
}
