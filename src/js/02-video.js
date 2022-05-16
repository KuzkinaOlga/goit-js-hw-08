
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayerRef = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayerRef);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

const saveTime = function(event) {
    const time = event.seconds
    localStorage.setItem(LOCALSTORAGE_KEY, time)
}
    
player.on('timeupdate', throttle(saveTime, 1000));
player.on("play", setTime)

function setTime() {
    const savedTime = localStorage.getItem(LOCALSTORAGE_KEY)
    if (savedTime) {
        player.setCurrentTime(savedTime)
        player.off('play', setTime)
    }
}
