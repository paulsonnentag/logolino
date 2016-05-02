import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';
import { Animal } from './animal';
import { AnimalPreview } from './animal-preview';
import { Barn } from './barn';
import { ProgressBar } from './progress-bar';

const animals = [
  'cow', 'dog', 'donkey', 'duck', 'goat', 'goose', 'horse', 'mouse', 'pig',
  'rabbit', 'rooster', 'sheep'
];

@DragDropContext(
  TouchBackend({
    enableMouseEvents: true
  })
)
export class FarmGame extends Component {
  constructor (props) {
    super();

    this.state = {
      animal : getNextRandomAnimal()
    };
  }

  newAnimal () {
    this.setState({ animal : getNextRandomAnimal(this.state.animal) });
  }

  render () {
    const {animal} = this.state;

    return (
      <div className="screen farm-game">

        <div className="barns">
          <Barn type="der"/>
          <Barn type="die"/>
          <Barn type="das"/>
        </div>


        <Animal key={animal}
                type={animal}
                onSolved={() => this.newAnimal()}/>

        <AnimalPreview key="__preview" name="Animal"/>
      </div>
    );
  }
}

function getNextRandomAnimal (prevAnimal) {
  const index = Math.floor(Math.random() * animals.length);

  if (prevAnimal === animals[index]) {
    return animals[(index + 1) % animals.length];
  }

  return animals[index];
}