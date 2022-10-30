
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
console.log(player)

// player.on('play', function() {
//     console.log('played the video!');
// });

player.on('timeupdate', throttle(onPlay, 1000))

function onPlay(event) {
  localStorage.setItem("videoplayer-current-time", event.seconds)
}

const currentTime = localStorage.getItem("videoplayer-current-time")

if (currentTime) {
    player.setCurrentTime(currentTime)
}
