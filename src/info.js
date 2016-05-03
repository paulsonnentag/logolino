import _ from 'lodash';
import React, {Component} from 'react';
import {Link} from 'react-router';
import {ProgressBar} from './progress-bar';
import {getResult} from './stats';
import {Logo} from './logo';

export default class Info extends Component {
  render () {
    const result = getResult();


    return (
      <div className="screen info">
        <Link to="/" className="button">Zurück</Link>
        <div className="animal-stats">




            {
              _.map(result, (success, animalType) => (

                <div className="animal-stat" key={animalType}>
                  <div className={"animal " + animalType}></div>
                  <ProgressBar progress={success * 100}/>
                </div>

              ))
            }
          </div>
      </div>
    );
  }
}
