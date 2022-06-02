import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeValue = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(timeValue, data.seconds);
  console.log(`${timeValue}: ${data.seconds}`);
};

player.on('timeupdate', throttle(onPlay, 1000));

if (localStorage.getItem(timeValue)) {
  player.setCurrentTime(localStorage.getItem(timeValue));
}
