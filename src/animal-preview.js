import React, { Component } from 'react';
import { DragLayer } from 'react-dnd';

function collect (monitor) {
  var item = monitor.getItem();
  return {
    type: item && item.type,
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  };
}

function getItemStyles ({currentOffset, type}) {
  if (!currentOffset) {
    return {
      display: 'none'
    };
  }

  // http://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/
  var x = currentOffset.x;
  var y = currentOffset.y;
  var transform = `translate(${x}px, ${y}px)`;

  return {
    pointerEvents: 'none',
    transform: transform,
    WebkitTransform: transform,
    position: 'absolute',
    top: '0',
    left: '0'
  };
}

@DragLayer(collect)
export class AnimalPreview extends Component {

  render () {
    const {isDragging, type} = this.props;

    if (!isDragging) {
      return <div></div>;
    }

    return (
      <div className={'animal preview ' + type}
           style={getItemStyles(this.props)}></div>
    );
  }
}