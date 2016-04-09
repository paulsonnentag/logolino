import React, { Component } from 'react';
import { Link } from 'react-router';

export class Home extends Component {

  render () {
    return (
      <div className="screen">

        <div className="vertical">
          <div className="sign">
            <div className="vertical center">
              <h2>logolino</h2>
              <h1>Bauernhof</h1>
            </div>
          </div>
          <Link to="/bauernhof" className="button">
            Spielen
          </Link>
          <Link to="/info" className="button">
            Info
          </Link>
        </div>
      </div>
    );
  }
}
