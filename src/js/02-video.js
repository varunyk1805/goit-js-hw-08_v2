import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const onPlay = ({ seconds }) => {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
  .then()
  .catch(error => {
    switch (error.name) {
      case 'RangeError':
        alert('the time was less than 0 or greater than the video’s duration');
        break;

      default:
        alert('some other error occurred');
        break;
    }
  });
