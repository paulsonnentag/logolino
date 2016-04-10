import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { ANIMAL } from './types';

@DropTarget(
  ANIMAL,
  {
    drop (props) {
      return {type: props.type};
    }
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  })
)
export class Barn extends Component {

  sayArticle () {
    this.articleSound.play();
  }

  render () {
    const { type, isOver, connectDropTarget } = this.props;
    const barnClass = 'barn ' + (isOver ?  ' over' : '');
    const style = {
      backgroundImage: `url(../images/barn-${type}.png)`
    };

    return connectDropTarget(
      <div className={barnClass}
           style={style}
           onClick={() => sayArticle(type)}>
        <h2 className="barn-label">{type}</h2>
      </div>
    );
  }
}

function sayArticle (type) {
  new buzz.sound(`../sounds/${type}`, {
    formats : [ 'ogg', 'mp3', 'aac' ]
  }).play();
}
