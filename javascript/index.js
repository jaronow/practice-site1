import narutoEpisodes from '../data/naruto-episodes.js'
import shippuudenEpisodes from '../data/shippuuden-episodes.js'

const narutoEpSelect = document.getElementById('naruto-episode-selection')
const shippuudenEpSelect = document.getElementById('shippuuden-episode-selection')
const tableTitle = document.getElementById('season-number')
const seasonInfo = document.getElementById('season-info')
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
    seasonTable.style.display = 'none'
    break;
    case 'shippuuden':
    shippuudenEpSelect.classList.add('active-series')
    narutoEpSelect.classList.remove('active-series')
    seasonTable.style.display = 'none'
    break;
    default:
    return;
  }
}

function showSeason() {
  let season = ''
  let title = ''
  switch(this.name) {
    case 'ns1':
    title = "Season 1"
    season = narutoEpisodes.map(season => {
      return season["Season 1"]
    })
    createTable(title, season)
    break;
    case 'ns2':
    title = "Season 2"
    season = narutoEpisodes.map(season => {
      return season["Season 2"]
    })
    createTable(title, season)
    break;
    case 'ns3':
    title = "Season 3"
    season = narutoEpisodes.map(season => {
      return season["Season 3"]
    })
    createTable(title, season)
    break;
    case 'ns4':
    title = "Season 4"
    season = narutoEpisodes.map(season => {
      return season["Season 4"]
    })
    createTable(title, season)
    break;
    case 'ns5':
    title = "Season 5"
    season = narutoEpisodes.map(season => {
      return season["Season 5"]
    })
    createTable(title, season)
    break;
    case 'ns6':
    title = "Season 6"
    season = narutoEpisodes.map(season => {
      return season["Season 6"]
    })
    createTable(title, season)
    break;
    case 'ns7':
    title = "Season 7"
    season = narutoEpisodes.map(season => {
      return season["Season 7"]
    })
    createTable(title, season)
    break;
    case 'ns8':
    title = "Season 8"
    season = narutoEpisodes.map(season => {
      return season["Season 8"]
    })
    createTable(title, season)
    break;
    case 'ns9':
    title = "Season 9"
    season = narutoEpisodes.map(season => {
      return season["Season 9"]
    })
    createTable(title, season)
    break;
    case 'nsm':
    title = "Movies"
    season = narutoEpisodes.map(season => {
      return season["Movies"]
    })
    createTable(title, season)
    break;
    case 'ss1':
    title = "Season 1"
    season = shippuudenEpisodes.map(season => {
      return season["Season 1"]
    })
    createTable(title, season)
    break;
    case 'ss2':
    title = "Season 2"
    season = shippuudenEpisodes.map(season => {
      return season["Season 2"]
    })
    createTable(title, season)
    break;
    case 'ss3':
    title = "Season 3"
    season = shippuudenEpisodes.map(season => {
      return season["Season 3"]
    })
    createTable(title, season)
    break;
    case 'ss4':
    title = "Season 4"
    season = shippuudenEpisodes.map(season => {
      return season["Season 4"]
    })
    createTable(title, season)
    break;
    case 'ss5':
    title = "Season 5"
    season = shippuudenEpisodes.map(season => {
      return season["Season 5"]
    })
    createTable(title, season)
    break;
    case 'ss6':
    title = "Season 6"
    season = shippuudenEpisodes.map(season => {
      return season["Season 6"]
    })
    createTable(title, season)
    break;
    case 'ss7':
    title = "Season 7"
    season = shippuudenEpisodes.map(season => {
      return season["Season 7"]
    })
    createTable(title, season)
    break;
    case 'ss8':
    title = "Season 8"
    season = shippuudenEpisodes.map(season => {
      return season["Season 8"]
    })
    createTable(title, season)
    break;
    case 'ss9':
    title = "Season 9"
    season = shippuudenEpisodes.map(season => {
      return season["Season 9"]
    })
    createTable(title, season)
    break;
    case 'ss10':
    title = "Season 10"
    season = shippuudenEpisodes.map(season => {
      return season["Season 10"]
    })
    createTable(title, season)
    break;
    case 'ss11':
    title = "Season 11"
    season = shippuudenEpisodes.map(season => {
      return season["Season 11"]
    })
    createTable(title, season)
    break;
    case 'ss12':
    title = "Season 12"
    season = shippuudenEpisodes.map(season => {
      return season["Season 12"]
    })
    createTable(title, season)
    break;
    case 'ss13':
    title = "Season 13"
    season = shippuudenEpisodes.map(season => {
      return season["Season 13"]
    })
    createTable(title, season)
    break;
    case 'ss14':
    title = "Season 14"
    season = shippuudenEpisodes.map(season => {
      return season["Season 14"]
    })
    createTable(title, season)
    break;
    case 'ss15':
    title = "Season 15"
    season = shippuudenEpisodes.map(season => {
      return season["Season 15"]
    })
    createTable(title, season)
    break;
    case 'ss16':
    title = "Season 16"
    season = shippuudenEpisodes.map(season => {
      return season["Season 16"]
    })
    createTable(title, season)
    break;
    case 'ss17':
    title = "Season 17"
    season = shippuudenEpisodes.map(season => {
      return season["Season 17"]
    })
    createTable(title, season)
    break;
    case 'ss18':
    title = "Season 18"
    season = shippuudenEpisodes.map(season => {
      return season["Season 18"]
    })
    createTable(title, season)
    break;
    case 'ss19':
    title = "Season 19"
    season = shippuudenEpisodes.map(season => {
      return season["Season 19"]
    })
    createTable(title, season)
    break;
    case 'ss20':
    title = "Season 20"
    season = shippuudenEpisodes.map(season => {
      return season["Season 20"]
    })
    createTable(title, season)
    break;
    case 'ss21':
    title = "Season 21"
    season = shippuudenEpisodes.map(season => {
      return season["Season 21"]
    })
    createTable(title, season)
    break;
    case 'ssm':
    title = "Movies"
    season = shippuudenEpisodes.map(season => {
      return season["Movies"]
    })
    createTable(title, season)
    break;
  }
}

function createTable(title, season) {
  if (seasonInfo) {
    seasonInfo.innerHTML = ""
  }
  let episodeInfo = Object.values(season[0])
  let episodeNum = Object.keys(season[0])
  tableTitle.innerHTML = title
  for (let i = 0; i < episodeNum.length; i++) {
    let row = seasonInfo.insertRow()
    let cell = row.insertCell()
    let cell2 = row.insertCell()
    let numText = document.createTextNode(episodeNum[i])
    let infoText = document.createTextNode(episodeInfo[i])
    cell.appendChild(numText)
    cell2.appendChild(infoText)
  }
  seasonTable.style.display = 'flex'
}
