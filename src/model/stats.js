import _ from 'lodash';

const SAMPLE_SIZE = 10;
const MIN_TRIES = 5;
const SUCCESS_RATE = 0.7;

const ANIMALS = [

  // level 1
  'dog',
  'cat',
  'pig',

  // level 2
  'donkey',
  'cow',
  'horse',

  // level 3
  'rabbit',
  'mouse',
  'sheep',

  // level 4
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
    level: 1,
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
  var index;

  // give preference to unlearned animals
  // except for first and last level
  if (stats.level === 4 || stats.level === 1) {
    index = Math.floor(Math.random() * animals.length);

    if (prevAnimal === animals[index]) {
      index = (index + 1) % animals.length;
    }

  } else {

    // 70 percent chance to get a new animal
    if (Math.random() < 0.7) {
      let offset = ((stats.level - 1) * 3);
      let levelIndex = Math.floor(Math.random() * 3);

      index = (prevAnimal === animals[offset + levelIndex]) ?
        (offset + ((levelIndex + 1) % 3))
        :
        (offset + levelIndex);

      // 30 percent to get an old animal
    } else {
      let totalAnimals = animals.length - 3;
      index = Math.floor(Math.random() * totalAnimals);

      if (prevAnimal === animals[index]) {
        index = (index + 1) % totalAnimals;
      }
    }
  }

  return animals[index];
}

function getLevel () {
  return stats.level
}

function setLevel (level) {
  stats.level = level;
  saveStats();
}

const reportSolved = _.partial(report, true);
const reportFailed = _.partial(report, false);

export {
  reportSolved,
  reportFailed,
  getResults,
  getLevel,
  setLevel,
  getNextRandomAnimal
}