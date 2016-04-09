import React, { Component } from 'react';

export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = {counter: 1 };
  }

  inc () {
    this.setState({counter : this.state.counter + 1 });
  }

  render() {
    return (
      <div>
      <h1>Hello, world {this.state.counter}!</h1>
      <button onClick={() => this.inc()} >inc</button>
      </div>
    );
  }
}
