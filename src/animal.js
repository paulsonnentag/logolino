import React, { Component } from 'react';
import { ANIMAL } from './types';
import { DragSource } from 'react-dnd';

@DragSource(
  ANIMAL,
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

        } else {
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
      backgroundImage: `url(../images/${type}.png)`,
      opacity: isDragging ? 0 : 1
    };

    return connectDragPreview(connectDragSource(
      <div className="animal"
           style={style}
           onClick={() => sayName(type)}>
      </div>
    ));
  }
}


function getArticle (type) {
  switch (type) {
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
  new buzz.sound(`../sounds/${type}-full`, {
    formats : [ 'ogg', 'mp3', 'aac' ]
  }).play();
}

function sayName (type) {
  new buzz.sound(`../sounds/${type}`, {
    formats : [ 'ogg', 'mp3', 'aac' ]
  }).play();
}

function playInvalidSound () {
  new buzz.sound(`../sounds/invalid`, {
    formats : [ 'ogg', 'mp3', 'aac' ]
  }).play();
}