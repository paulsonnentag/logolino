import React, { Component } from 'react';

import { Animal } from './animal';
import { Barn } from './barn';

export class FarmGame extends Component {

  render() {
    return (
      <div className="screen">

        <div className="row">
          <Barn type="der"/>
          <Barn type="die"/>
          <Barn type="das"/>
        </div>


        <Animal type="duck"/>
        <Animal type="goat"/>
      </div>
    );
  }
}
