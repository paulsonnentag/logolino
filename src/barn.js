import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { sound } from './sound'

@DropTarget(
  'ANIMAL',
  {
    drop (props) {
      return {type: props.type};
    }
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  })
)
export class Barn extends Component {

  sayArticle () {
    this.articleSound.play();
  }

  render () {
    const { type, isOver, connectDropTarget } = this.props;
    const barnClass = `barn ${type} ${isOver ?  ' over' : ''}`;

    return connectDropTarget(
      <div className={barnClass}
           onClick={() => sayArticle(type)}>
      </div>
    );

  }
}

function sayArticle (type) {
  sound.play(type);
}
