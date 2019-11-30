import narutoEpisodes from '../data/naruto-episodes.js'
import shippuudenEpisodes from '../data/shippuuden-episodes.js'

console.log(narutoEpisodes)

const narutoEpSelect = document.getElementById('naruto-episode-selection')
const shippuudenEpSelect = document.getElementById('shippuuden-episode-selection')
const seasonNum = document.getElementById('season-number')
const seasonTable = document.getElementById('season-table')

const seasonButtons = document.querySelectorAll('.episode-button')
seasonButtons.forEach(button => button.addEventListener('click', showSeason))

const seriesButtons = document.querySelectorAll('.series-button')
seriesButtons.forEach(button => button.addEventListener('click', showSeries))

function showSeries() {
  switch(this.name) {
    case 'naruto':
    narutoEpSelect.classList.add('active-series')
    shippuudenEpSelect.classList.remove('active-series')
    break;
    case 'shippuuden':
    shippuudenEpSelect.classList.add('active-series')
    narutoEpSelect.classList.remove('active-series')
    break;
    default:
    return;
  }
}

function showSeason() {
  console.log(this)
}
