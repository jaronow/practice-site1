import narutoEpisodes from '../data/naruto-episodes.js'
import shippuudenEpisodes from '../data/shippuuden-episodes.js'
import {characters} from '../data/characters.js'
import {jutsu} from '../data/jutsu.js'

const narutoEpSelect = document.getElementById('naruto-episode-selection')
const shippuudenEpSelect = document.getElementById('shippuuden-episode-selection')
const tableTitle = document.getElementById('season-number')
const seasonInfo = document.getElementById('season-info')
const seasonTable = document.getElementById('season-table')
const tablePageSelect = document.getElementById('page-selection')

const seasonButtons = document.querySelectorAll('.episode-button')
seasonButtons.forEach(button => button.addEventListener('click', showSeason))

const seriesButtons = document.querySelectorAll('.series-button')
seriesButtons.forEach(button => button.addEventListener('click', showSeries))

function showSeries() {
  switch(this.name) {
    case 'naruto':
    shippuudenEpSelect.classList.remove('active-series')
    seasonTable.style.display = 'none'
    tablePageSelect.style.display = 'none'
    narutoEpSelect.classList.add('active-series')
    break;
    case 'shippuuden':
    narutoEpSelect.classList.remove('active-series')
    seasonTable.style.display = 'none'
    tablePageSelect.style.display = 'none'
    shippuudenEpSelect.classList.add('active-series')
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
    createSeason(title, season)
    break;
    case 'ns2':
    title = "Season 2"
    season = narutoEpisodes.map(season => {
      return season["Season 2"]
    })
    createSeason(title, season)
    break;
    case 'ns3':
    title = "Season 3"
    season = narutoEpisodes.map(season => {
      return season["Season 3"]
    })
    createSeason(title, season)
    break;
    case 'ns4':
    title = "Season 4"
    season = narutoEpisodes.map(season => {
      return season["Season 4"]
    })
    createSeason(title, season)
    break;
    case 'ns5':
    title = "Season 5"
    season = narutoEpisodes.map(season => {
      return season["Season 5"]
    })
    createSeason(title, season)
    break;
    case 'ns6':
    title = "Season 6"
    season = narutoEpisodes.map(season => {
      return season["Season 6"]
    })
    createSeason(title, season)
    break;
    case 'ns7':
    title = "Season 7"
    season = narutoEpisodes.map(season => {
      return season["Season 7"]
    })
    createSeason(title, season)
    break;
    case 'ns8':
    title = "Season 8"
    season = narutoEpisodes.map(season => {
      return season["Season 8"]
    })
    createSeason(title, season)
    break;
    case 'ns9':
    title = "Season 9"
    season = narutoEpisodes.map(season => {
      return season["Season 9"]
    })
    createSeason(title, season)
    break;
    case 'nsm':
    title = "Movies"
    season = narutoEpisodes.map(season => {
      return season["Movies"]
    })
    createSeason(title, season)
    break;
    case 'ss1':
    title = "Season 1"
    season = shippuudenEpisodes.map(season => {
      return season["Season 1"]
    })
    createSeason(title, season)
    break;
    case 'ss2':
    title = "Season 2"
    season = shippuudenEpisodes.map(season => {
      return season["Season 2"]
    })
    createSeason(title, season)
    break;
    case 'ss3':
    title = "Season 3"
    season = shippuudenEpisodes.map(season => {
      return season["Season 3"]
    })
    createSeason(title, season)
    break;
    case 'ss4':
    title = "Season 4"
    season = shippuudenEpisodes.map(season => {
      return season["Season 4"]
    })
    createSeason(title, season)
    break;
    case 'ss5':
    title = "Season 5"
    season = shippuudenEpisodes.map(season => {
      return season["Season 5"]
    })
    createSeason(title, season)
    break;
    case 'ss6':
    title = "Season 6"
    season = shippuudenEpisodes.map(season => {
      return season["Season 6"]
    })
    createSeason(title, season)
    break;
    case 'ss7':
    title = "Season 7"
    season = shippuudenEpisodes.map(season => {
      return season["Season 7"]
    })
    createSeason(title, season)
    break;
    case 'ss8':
    title = "Season 8"
    season = shippuudenEpisodes.map(season => {
      return season["Season 8"]
    })
    createSeason(title, season)
    break;
    case 'ss9':
    title = "Season 9"
    season = shippuudenEpisodes.map(season => {
      return season["Season 9"]
    })
    createSeason(title, season)
    break;
    case 'ss10':
    title = "Season 10"
    season = shippuudenEpisodes.map(season => {
      return season["Season 10"]
    })
    createSeason(title, season)
    break;
    case 'ss11':
    title = "Season 11"
    season = shippuudenEpisodes.map(season => {
      return season["Season 11"]
    })
    createSeason(title, season)
    break;
    case 'ss12':
    title = "Season 12"
    season = shippuudenEpisodes.map(season => {
      return season["Season 12"]
    })
    createSeason(title, season)
    break;
    case 'ss13':
    title = "Season 13"
    season = shippuudenEpisodes.map(season => {
      return season["Season 13"]
    })
    createSeason(title, season)
    break;
    case 'ss14':
    title = "Season 14"
    season = shippuudenEpisodes.map(season => {
      return season["Season 14"]
    })
    createSeason(title, season)
    break;
    case 'ss15':
    title = "Season 15"
    season = shippuudenEpisodes.map(season => {
      return season["Season 15"]
    })
    createSeason(title, season)
    break;
    case 'ss16':
    title = "Season 16"
    season = shippuudenEpisodes.map(season => {
      return season["Season 16"]
    })
    createSeason(title, season)
    break;
    case 'ss17':
    title = "Season 17"
    season = shippuudenEpisodes.map(season => {
      return season["Season 17"]
    })
    createSeason(title, season)
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
    createSeason(title, season)
    break;
    case 'ss20':
    title = "Season 20"
    season = shippuudenEpisodes.map(season => {
      return season["Season 20"]
    })
    createSeason(title, season)
    break;
    case 'ss21':
    title = "Season 21"
    season = shippuudenEpisodes.map(season => {
      return season["Season 21"]
    })
    createSeason(title, season)
    break;
    case 'ssm':
    title = "Movies"
    season = shippuudenEpisodes.map(season => {
      return season["Movies"]
    })
    createSeason(title, season)
    break;
  }
}

let episodeNums = new Array()
let episodeNames = new Array()
let captionTitle = ''
let episodeNumList = new Array()
let episodeNameList = new Array()
let currentPage = 1
const numPerPage = 10
let numOfPages = 1
const currentPageInfo = document.getElementById('current-page')

const pageButtons = document.querySelectorAll('.table-page')
pageButtons.forEach(button => button.addEventListener('click', changePage))

function createSeason(title, season) {
  currentPage = 1
  captionTitle = title
  episodeNumList = Object.keys(season[0])
  episodeNameList = Object.values(season[0])
  getNumOfPages()
}

function getNumOfPages() {
  numOfPages = Math.ceil(episodeNumList.length / numPerPage)
  createEpisodeList()
}

function changePage() {
  switch(this.name) {
    case 'next': nextPage()
    break;
    case 'previous': previousPage()
    break;
  }
}

function nextPage() {
  if (currentPage === numOfPages) {
    return
  }
  currentPage += 1
  createEpisodeList()
}

function previousPage() {
  if (currentPage === 1) {
    return
  }
  currentPage -= 1
  createEpisodeList()
}

function createEpisodeList() {
  const begin = ((currentPage - 1) * numPerPage)
  const end = begin + numPerPage
  episodeNums = episodeNumList.slice(begin, end)
  episodeNames = episodeNameList.slice(begin, end)
  createTable()
}

function createTable() {
  if (seasonInfo) {
    seasonInfo.innerHTML = ""
  }
  tableTitle.innerHTML = captionTitle
  for (let i = 0; i < episodeNums.length; i++) {
    let row = seasonInfo.insertRow()
    let cell = row.insertCell()
    let cell2 = row.insertCell()
    let numText = document.createTextNode(episodeNums[i])
    let infoText = document.createTextNode(episodeNames[i])
    cell.appendChild(numText)
    cell2.appendChild(infoText)
  }
  currentPageInfo.innerHTML = `Page ${currentPage} of ${numOfPages}`
  seasonTable.style.display = 'flex'
  tablePageSelect.style.display = 'flex'
}

const villageSelection = document.querySelector('.village-selection')
const jutsuSelection = document.querySelector('.jutsu-selection')

const characterAndJutsuButtons = document.querySelectorAll('.character-jutsu-button')
characterAndJutsuButtons.forEach(button => button.addEventListener('click', showMenu))

const jutsuSelectionButtons = document.querySelectorAll('[name$=-jutsu]')
jutsuSelectionButtons.forEach(button => button.addEventListener('click', showJutsuList))

const villageSelectionButtons = document.querySelectorAll('[name$=-village]')
villageSelectionButtons.forEach(button => button.addEventListener('click', showCharacterList))

function showMenu() {
  switch(this.name){
    case 'jutsu':
    villageSelection.classList.remove('characters-jutsu-active')
    jutsuSelection.classList.add('characters-jutsu-active')
    break;
    case 'characters':
    jutsuSelection.classList.remove('characters-jutsu-active')
    villageSelection.classList.add('characters-jutsu-active')
    break;
  }
}

function showJutsuList() {
  console.log(this)
}

function showCharacterList() {
  console.log(this)
}
