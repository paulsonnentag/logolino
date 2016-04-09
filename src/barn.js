import React, { Component } from 'react';

export class Barn extends Component {

  componentWillMount () {
    this.sound = new buzz.sound(`../sounds/${this.props.type}`, {
      formats : [ 'ogg', 'mp3', 'aac' ]
    });
  }

  playSound () {
    this.sound.play();
  }

  render () {
    let { type } = this.props;

    return (
      <div className="barn"
           onClick={() => this.playSound()}>

        <h2 className="barn-label">{type}</h2>
      </div>
    );
  }
}
