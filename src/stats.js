import _ from 'lodash';

const HISTORY_SIZE = 100;
const SAMPLE_SIZE = 10;

var stats = loadStats();

function loadStats () {
  var stats;

  try {
    stats = JSON.parse(localStorage.getItem('STATS'));
  } catch (e) {
    console.log('initialize stats');
  }

  return stats || {};
}

function saveStats () {
  var latestsStats = getLatestStats(stats);
  localStorage.setItem('STATS', JSON.stringify(latestsStats));
}

function report (success, animal) {
  var animalStats = getAnimalStats(animal);
  animalStats.push(success ? 1 : 0);

  saveStats();
}

function getAnimalStats (animal) {
  return stats[animal] = stats[animal] || [];
}

function getResult () {
  return _.mapValues(stats, getSuccessRate);
}

function getSuccessRate(tries) {
  var successfullTries = _(tries).slice(0, SAMPLE_SIZE).filter(result => result == 1);
  return successfullTries.length / tries.length;
}

function getLatestStats () {
  return _.mapValues(stats, (tries) => tries.slice(0, HISTORY_SIZE));
}


const reportSolved = _.partial(report, true);
const reportFailed = _.partial(report, false);

export {
  reportSolved,
  reportFailed,
  getResult
}