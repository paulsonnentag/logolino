import _ from 'lodash';
import React, {Component} from 'react';
import {Link} from 'react-router';
import {ProgressBar} from './progress-bar';
import {getResults} from './stats';

export default class Info extends Component {
  render () {
    const result = getResults();

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
        <Link to="/" className="button">Zurück</Link>
        <div className="animal-stats">
          {animalStats}
        </div>
      </div>
    );
  }
}
