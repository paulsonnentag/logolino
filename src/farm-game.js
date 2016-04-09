import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Animal } from './animal';
import { Barn } from './barn';

@DragDropContext(HTML5Backend)
export class FarmGame extends Component {
  render() {
    return (
      <div className="screen">

        <div className="row">
          <Barn type="der"/>
          <Barn type="die"/>
          <Barn type="das"/>
        </div>


        <Animal type="duck"/>
        <Animal type="goat"/>
      </div>
    );
  }
}
