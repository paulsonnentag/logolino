import React, { Component } from 'react';

export class Animal extends Component {

  componentWillMount () {
    this.sound = new buzz.sound(`../sounds/${this.props.type}`, {
      formats : [ 'ogg', 'mp3', 'aac' ]
    });
  }

  playSound () {
    this.sound.play();
    console.log('click');
  }


  render () {
    let style = {
      backgroundImage: `url(../images/${this.props.type}.png)`
    };

    return (
      <div className="animal"
           style={style}
           onClick={() => this.playSound()}>
      </div>
    );
  }
}
