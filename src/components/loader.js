import React, { Component } from 'react';
import ProgressBar from './progress-bar';

export default class Loader extends Component {
  render() {
    const { progress, children } = this.props;

    if (progress < 100) {
      return (
        <div className="screen loading">
          <div className="sign"></div>
          <ProgressBar progress={progress}/>
        </div>
      )
    }

    return children;
  }
}
