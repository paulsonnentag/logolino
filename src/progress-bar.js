import React, {Component} from 'react';

export class ProgressBar extends Component {
  render () {
    const {progress} = this.props;

    return (
      <div className="progress-bar">
        <div className="progress-bar-inner"
             style={{width : `${progress}%`}}></div>
      </div>
    )
  }
}
