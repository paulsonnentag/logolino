import React, { Component } from 'react';

import { Animal } from './animal';

export class FarmGame extends Component {

  render() {
    return (
      <div className="screen">
        <h1>Farm game</h1>
        <Animal type="duck"></Animal>
        <Animal type="goat"></Animal>
      </div>
    );
  }
}
