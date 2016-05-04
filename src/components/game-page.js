import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';
import {Link} from 'react-router';
import Animal from './animal';
import AnimalPreview from './animal-preview';
import Barn from './barn';
import MessageBox from './message-box'
import ProgressBar from './progress-bar';
import {reportSolved, reportFailed, getNextRandomAnimal} from '../model/stats';

const TARGET_POINTS = 10;

@DragDropContext(
  TouchBackend({
    enableMouseEvents: true
  })
)
export default class GamePage extends Component {
  constructor (props) {
    super();

    this.state = getInitialState();
  }

  solvedHandler () {
    const {animal, mistake, points} = this.state;

    if (!mistake) {
      let newPoints = points + 1;

      reportSolved(animal);

      this.setState({
        points: newPoints,
        completed: newPoints === TARGET_POINTS
      });
    }

    this.setState({
      mistake: false,
      animal: getNextRandomAnimal(animal)
    });
  }

  failedHandler () {
    const {animal, mistake} = this.state;

    if (!mistake) {
      reportFailed(animal);
      this.setState({mistake: true});
    }
  }

  resetGame () {
    this.setState(getInitialState());
  }

  render () {
    const {animal, points, completed} = this.state;
    var messageBox;

    if (completed) {
      messageBox = (
        <MessageBox>
          <h1>Gut gemacht!</h1>

          <button className="button" onClick={() => this.resetGame()}>Nochmal</button>

          <Link to="/" className="button">
            Beenden
          </Link>
        </MessageBox>
      );
    }

    return (
      <div className="screen farm-game">
        {messageBox}

        <div className="barns">
          <Barn type="der"/>
          <Barn type="die"/>
          <Barn type="das"/>
        </div>

        <Animal key={animal}
                type={animal}
                onSolved={() => this.solvedHandler()}
                onFailed={() => this.failedHandler()}/>

        <AnimalPreview key="__preview" name="Animal"/>

        <ProgressBar progress={(points / TARGET_POINTS) * 100}/>
      </div>
    );
  }
}

function getInitialState () {
  return {
    animal: getNextRandomAnimal(),
    mistake: false,
    points: 0,
    completed: false
  };
}
