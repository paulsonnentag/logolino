import React, {Component} from 'react';
import {Link} from 'react-router';

export default class HomePage extends Component {
  render () {
    return (
      <div className="screen home">

        <div className="sign">
        </div>

        <div className="home-menu">
          <Link to="/bauernhof" className="button">Spielen</Link>
          <Link to="/info" className="button">Info</Link>
        </div>
      </div>
    );
  }
}
