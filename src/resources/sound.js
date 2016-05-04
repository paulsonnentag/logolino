import {Howl} from 'howler';

export default new Howl({
  urls: [
    'sounds/sound-sprite.mp3',
    'sounds/sound-sprite.ogg',
    'sounds/sound-sprite.m4a'
  ],
  sprite: {
    'cat': [0, 1000],
    'cat_full': [1000, 2000],
    'cow': [3000, 1000],
    'cow_full': [4000, 2000],
    'dog': [6000, 1000],
    'dog_full': [7000, 1000],
    'donkey': [8000, 1000],
    'donkey_full': [9000, 2000],
    'duck': [11000, 1000],
    'duck_full': [12000, 2000],
    'goat': [14000, 1000],
    'goat_full': [15000, 2000],
    'goose': [17000, 1000],
    'goose_full': [18000, 2000],
    'horse': [20000, 1000],
    'horse_full': [21000, 2000],
    'mouse': [23000, 1000],
    'mouse_full': [24000, 2000],
    'pig': [26000, 1000],
    'pig_full': [27000, 2000],
    'rabbit': [29000, 1000],
    'rabbit_full': [30000, 2000],
    'rooster': [32000, 1000],
    'rooster_full': [33000, 2000],
    'sheep': [35000, 1000],
    'sheep_full': [36000, 2000],
    'der': [38000, 1000],
    'die': [39000, 1000],
    'das': [40000, 1000],
    'incorrect': [41000, 1000]
  }
})
