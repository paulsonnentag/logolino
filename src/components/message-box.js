import React, {Component} from 'react';

export default class MessageBox extends Component {
  render () {
    const {children} = this.props;

    return (
      <div className="message-box fade-in">
        <div className="message-box-content slide-in-top">
          {children}
        </div>
      </div>
    )
  }
}
