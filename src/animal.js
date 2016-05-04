import React, { Component } from 'react';
import { ANIMAL } from './types';
import { DragSource } from 'react-dnd';
import { sound } from './sound';

@DragSource(
  'ANIMAL',
  {
    beginDrag (props) {
      return {type: props.type};
    },

    endDrag (props, monitor) {
      const { type } = props;
      const result = monitor.getDropResult();


      if (result) {
        if (result.type == getArticle(type)) {
          sayNameWithArticle(type);
          props.onSolved();

        } else {
          props.onFailed();
          playInvalidSound();
        }
      }
    }

  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  })
)
export class Animal extends Component {
  render () {
    const { type, isDragging, connectDragSource, connectDragPreview } = this.props;
    const style = {
      opacity: isDragging ? 0 : 1
    };

    return connectDragSource(
      connectDragPreview(
        <div className={"animal slide-in-left " + type}
             style={style}
             onClick={() => sayName(type)}>
        </div>
      )
    , {dropEffect: 'move'});
  }
}

function getArticle (animal) {
  switch (animal) {
    case 'cat':
    case 'cow':
    case 'duck':
    case 'goat':
    case 'goose':
    case 'mouse':
      return 'die';

    case 'dog':
    case 'donkey':
    case 'rabbit':
    case 'rooster':
      return 'der';

    case 'horse':
    case 'pig':
    case 'sheep':
      return 'das';
  }
}

function sayNameWithArticle (type) {
  sound.play(`${type}_full`);
}

function sayName (type) {
  sound.play(type);
}

function playInvalidSound () {
  sound.play('incorrect');
}