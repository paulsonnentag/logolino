import { sound } from './sound';

var loaded = false;

sound.on('load', function () {
  loaded = true;
});

export function loader (images, update) {
  var loadedCount = 0;

  if (!loaded) {
    sound.on('load', function () {
      update(getPercentage());
    });
  }

  images.forEach(function (src) {
    var image = new Image();
    image.src = src;

    image.onload = function () {
      loadedCount++;
      update(getPercentage());
    }
  });


  function getPercentage () {
    return Math.ceil(100*(loadedCount + loaded) / (images.length + 1));
  }
}
