import _ from 'lodash';

const HISTORY_SIZE = 100;
const SAMPLE_SIZE = 10;
const MIN_SAMPLES = 5;

const ANIMALS = [

  // exercise 1
  'dog',
  'cat',
  'pig',

  // exercise 2
  'donkey',
  'cow',
  'horse',

  // exercise 3
  'rabbit',
  'mouse',
  'sheep',

  // bonus
  'duck',
  'goat',
  'goose',
  'rooster'
];


var stats = loadStats();

function loadStats () {
  var stats;

  try {
    stats = JSON.parse(localStorage.getItem('STATS'));
  } catch (e) {
    console.log('initialize stats');
  }

  return stats || getInitialStats();
}

function getInitialStats () {
  return {
    level : 0,
    animals: _.reduce(ANIMALS, (stats, animal) => {
      stats[animal] = [];
      return stats;
    }, {})
  }
}

function saveStats () {
  localStorage.setItem('STATS', JSON.stringify(stats));
}

function report (success, animal) {
  stats.animals[animal].push(success ? 1 : 0);

  saveStats();
}

function getResult () {
  return _.mapValues(stats.animals, tries => ({
      successRate: getSuccessRate(tries),
      count: tries.length
    }));
}

function getSuccessRate (tries) {
  var successfullTries = _.filter(tries.slice(0, SAMPLE_SIZE), (result) => result == 1);
  return successfullTries.length / tries.length;
}

function getLatestStats () {
  return _.mapValues(stats, (tries) => tries.slice(0, HISTORY_SIZE));
}


function getNextRandomAnimal (prevAnimal) {
  const index = Math.floor(Math.random() * ANIMALS.length);

  if (prevAnimal === ANIMALS[index]) {
    return ANIMALS[(index + 1) % ANIMALS.length];
  }

  return ANIMALS[index];
}

const reportSolved = _.partial(report, true);
const reportFailed = _.partial(report, false);

export {
  reportSolved,
  reportFailed,
  getResult,
  getNextRandomAnimal
}