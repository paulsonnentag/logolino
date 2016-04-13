import React, { Component } from 'react';
import { ProgressBar } from './progress-bar';
import { Logo } from './logo'

export class Loader extends Component {
  render() {
    const { progress, children } = this.props;

    if (progress < 100) {
      return (
        <div className="screen">
          <div className="vertical">
            <Logo/>
            <ProgressBar progress={progress}/>
          </div>
        </div>
      )
    }

    return (
      <span>{children}</span>
    );
  }
}
