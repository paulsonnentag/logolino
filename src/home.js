import React, { Component } from 'react';
import { Link } from 'react-router';
import { Logo } from './logo';

export class Home extends Component {
  render () {
    return (
      <div className="screen home">

          <Logo/>

          <div className="home-menu">
            <Link to="/bauernhof" className="button">Spielen</Link>
            <Link to="/info" className="button">Info</Link>
          </div>
      </div>
    );
  }
}
