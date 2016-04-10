import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';
import { Animal } from './animal';
import { AnimalPreview } from './animal-preview';
import { Barn } from './barn';


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
      animal : getRandomAnimal()
    };
  }

  newAnimal () {
    this.setState({ animal : getRandomAnimal() });
  }

  render () {
    const {animal} = this.state;

    return (
      <div className="screen farm-game">
        <div className="vertical">
          <div className="horizontal">
            <Barn type="der"/>
            <Barn type="die"/>
            <Barn type="das"/>
          </div>
          <div className="horizontal">
            <Animal type={animal}
                    onSolved={() => this.newAnimal()}/>
          </div>
        </div>
        <AnimalPreview key="__preview" name="Animal"/>
      </div>
    );
  }
}

function getRandomAnimal () {
  const index = Math.floor(Math.random() * animals.length);
  return animals[index];
}