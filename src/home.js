import React, { Component } from 'react';
import { Link } from 'react-router';

export class Home extends Component {

  render () {
    return (
      <div className="screen">

        <div className="sign">
          <h1>logolino</h1>
          <h2>Bauernhof</h2>
        </div>

        <Link to="/bauernhof" className="button">
          Spielen
        </Link>
        <Link to="/info" className="button">
          Info
        </Link>
      </div>
    );
  }
}
