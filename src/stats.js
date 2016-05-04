import _ from 'lodash';

const SAMPLE_SIZE = 10;
const MIN_TRIES = 5;
const SUCCESS_RATE = 0.7;

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
    level : 1,
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
  // add try
  stats.animals[animal].push(success ? 1 : 0);

  updateLevel();

  saveStats();
}

function updateLevel () {
  if (stats.level == 4) {
    return;
  }

  const results = _.pick(getResults(), getUnlockedAnimals());

  if (_.every(results, isSuccessful)) {
    stats.level++;
    console.log('yay next level: ', stats.level);
  }
}

function isSuccessful ({successRate, count}) {
  return successRate >= SUCCESS_RATE && count >= MIN_TRIES;
}

function getUnlockedAnimals () {
  if (stats.level == 4) {
    return ANIMALS;
  }

  return ANIMALS.slice(0, stats.level * 3);
}

function getResults () {
  return _.mapValues(stats.animals, tries => ({
      successRate: getSuccessRate(tries),
      count: tries.length
    }));
}

function getSuccessRate (tries) {
  var successfullTries = _.filter(tries.slice(0, SAMPLE_SIZE), (result) => result == 1);
  return successfullTries.length / tries.length;
}

function getNextRandomAnimal (prevAnimal) {
  const animals = getUnlockedAnimals();

  const index = Math.floor(Math.random() * animals.length);

  if (prevAnimal === animals[index]) {
    return animals[(index + 1) % animals.length];
  }

  return animals[index];
}

const reportSolved = _.partial(report, true);
const reportFailed = _.partial(report, false);

export {
  reportSolved,
  reportFailed,
  getResults,
  getNextRandomAnimal
}