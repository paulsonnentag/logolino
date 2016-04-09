import React, { Component } from 'react';
import { Link } from 'react-router';

export class Home extends Component {

  render() {
    return (
      <div>
        <Link to="/bauernhof">Spielen</Link>

      </div>
    );
  }
}
