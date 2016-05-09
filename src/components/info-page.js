import _ from 'lodash';
import React, {Component} from 'react';
import {Link} from 'react-router';
import ProgressBar from './progress-bar';
import {getResults, getLevel, setLevel} from '../model/stats';

export default class InfoPage extends Component {
  constructor () {
    super();

    this.state = {level: getLevel()};
  }

  setLevel (level) {
    setLevel(level);
    this.setState({level: level});
  }

  render () {
    const result = getResults();
    const {level} = this.state;

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
        <div className="info-menu">

          <Link to="/" className="button">Zurück</Link>

          <div className="field-set">
            <label htmlFor="level">Fortschritt</label>
            <select id="level"
                    value={level}
                    onChange={(e) => this.setLevel(parseInt(e.target.value, 10))}>
              <option value="1">3 Tiere</option>
              <option value="2">6 Tiere</option>
              <option value="3">9 Tiere</option>
              <option value="4">13 Tiere</option>
            </select>
          </div>

        </div>
        <div className="animal-stats" data-scrollable="true">
          {animalStats}
        </div>
      </div>
    );
  }
}
