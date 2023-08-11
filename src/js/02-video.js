import Player from '@vimeo/player'

const iframe = document.querySelector('#vimeo-player')
const player = new Player(iframe)
const throttle = require('lodash.throttle');

player.on('timeupdate', throttle(fnTime, 1000))

function fnTime(data) {
    let time = data.seconds
    localStorage.setItem('videoplayer-current-time', time)
}

const timePlayed = localStorage.getItem('videoplayer-current-time')

if (timePlayed) { player.setCurrentTime(timePlayed).catch(errorFn) }