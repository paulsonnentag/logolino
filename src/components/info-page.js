import _ from 'lodash';
import React, {Component} from 'react';
import {Link} from 'react-router';
import ProgressBar from './progress-bar';
import {getResults, resetStats} from '../model/stats';

export default class InfoPage extends Component {
  constructor () {
    super();

    this.state = {
      result: getResults()
    };
  }

  deleteStats () {
    if (confirm('Spielstand löschen ?')) {
      resetStats();
      this.setState({result: getResults()});
    }
  }

  render () {
    const {result} = this.state;

    const animalStats = _.map(result, ({successRate, count}, animalType) => {
      var progressBar;
      const isDisabled = count === 0;
      const className = 'animal ' + animalType
        + (isDisabled ? ' disabled' : '');

      if (!isDisabled) {
        progressBar = <ProgressBar progress={successRate * 100}/>;
      }

      return (
        <div className="animal-stat" key={animalType}>
          <div className={className}></div>
          {progressBar}
        </div>
      )
    });

    return (
      <div className="screen info">
        <div className="button-bar">
          <Link to="/" className="button green">Zurück</Link>
          <button className="button" onClick={() => this.deleteStats()}>Löschen</button>
        </div>
        <div className="animal-stats" data-scrollable="true">
          {animalStats}
        </div>
      </div>
    );
  }
}
