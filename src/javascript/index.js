// Import styling for webpack to build
import '../css/style.css'

// All The Data needed to create episode, character, and jutsu lists
import {narutoEpisodes} from '../data/naruto-episodes.js'
import {shippuudenEpisodes} from '../data/shippuuden-episodes.js'
import {characters} from '../data/characters.js'
import {jutsu} from '../data/jutsu.js'

// Handlebars templates
const jutsuTemplate = require('./templates/jutsu-template.hbs')
const characterTemplate = require('./templates/character-template.hbs')
const episodeTempate = require('./templates/episode-template.hbs')

// Elements and Event Listeners used in creating episode tables
const narutoEpSelect = document.getElementById('naruto-episode-selection')
const shippuudenEpSelect = document.getElementById('shippuuden-episode-selection')
const seasonTable = document.getElementById('season-table')
const tablePageSelect = document.getElementById('page-selection')

const seasonButtons = document.querySelectorAll('.episode-button')
seasonButtons.forEach(button => button.addEventListener('click', showSeason))

const seriesButtons = document.querySelectorAll('.series-button')
seriesButtons.forEach(button => button.addEventListener('click', showSeries))

// Function that shows season selection of shows
function showSeries() {
  switch(this.name) {
    case 'naruto':
    shippuudenEpSelect.classList.remove('active-series')
    tablePageSelect.style.display = 'none'
    seasonTable.innerHTML = ''
    narutoEpSelect.classList.add('active-series')
    break;
    case 'shippuuden':
    narutoEpSelect.classList.remove('active-series')
    tablePageSelect.style.display = 'none'
    seasonTable.innerHTML = ''
    shippuudenEpSelect.classList.add('active-series')
    break;
  }
}

// function that selects desired season
function showSeason() {
  let season = ''
  let seasonTitle =''
  switch(this.name) {
    case 'ns1':
    seasonTitle = 'Season 1'
    season = narutoEpisodes['Season 1']
    createSeason(seasonTitle, season)
    break;
    case 'ns2':
    seasonTitle = 'Season 2'
    season = narutoEpisodes['Season 2']
    createSeason(seasonTitle, season)
    break;
    case 'ns3':
    seasonTitle = 'Season 3'
    season = narutoEpisodes['Season 3']
    createSeason(seasonTitle, season)
    break;
    case 'ns4':
    seasonTitle = 'Season 4'
    season = narutoEpisodes['Season 4']
    createSeason(seasonTitle, season)
    break;
    case 'ns5':
    seasonTitle = 'Season 5'
    season = narutoEpisodes['Season 5']
    createSeason(seasonTitle, season)
    break;
    case 'ns6':
    seasonTitle = 'Season 6'
    season = narutoEpisodes['Season 6']
    createSeason(seasonTitle, season)
    break;
    case 'ns7':
    seasonTitle = 'Season 7'
    season = narutoEpisodes['Season 7']
    createSeason(seasonTitle, season)
    break;
    case 'ns8':
    seasonTitle = 'Season 8'
    season = narutoEpisodes['Season 8']
    createSeason(seasonTitle, season)
    break;
    case 'ns9':
    seasonTitle = 'Season 9'
    season = narutoEpisodes['Season 9']
    createSeason(seasonTitle, season)
    break;
    case 'nsm':
    seasonTitle = 'Movies'
    season = narutoEpisodes['Movies']
    createSeason(seasonTitle, season)
    break;
    case 'ss1':
    seasonTitle = 'Season 1'
    season = shippuudenEpisodes['Season 1']
    createSeason(seasonTitle, season)
    break;
    case 'ss2':
    seasonTitle = 'Season 2'
    season = shippuudenEpisodes['Season 2']
    createSeason(seasonTitle, season)
    break;
    case 'ss3':
    seasonTitle = 'Season 3'
    season = shippuudenEpisodes['Season 3']
    createSeason(seasonTitle, season)
    break;
    case 'ss4':
    seasonTitle = 'Season 4'
    season = shippuudenEpisodes['Season 4']
    createSeason(seasonTitle, season)
    break;
    case 'ss5':
    seasonTitle = 'Season 5'
    season = shippuudenEpisodes['Season 5']
    createSeason(seasonTitle, season)
    break;
    case 'ss6':
    seasonTitle = 'Season 6'
    season = shippuudenEpisodes['Season 6']
    createSeason(seasonTitle, season)
    break;
    case 'ss7':
    seasonTitle = 'Season 7'
    season = shippuudenEpisodes['Season 7']
    createSeason(seasonTitle, season)
    break;
    case 'ss8':
    seasonTitle = 'Season 8'
    season = shippuudenEpisodes['Season 8']
    createSeason(seasonTitle, season)
    break;
    case 'ss9':
    seasonTitle = 'Season 9'
    season = shippuudenEpisodes['Season 9']
    createSeason(seasonTitle, season)
    break;
    case 'ss10':
    seasonTitle = 'Season 10'
    season = shippuudenEpisodes['Season 10']
    createSeason(seasonTitle, season)
    break;
    case 'ss11':
    seasonTitle = 'Season 11'
    season = shippuudenEpisodes['Season 11']
    createSeason(seasonTitle, season)
    break;
    case 'ss12':
    seasonTitle = 'Season 12'
    season = shippuudenEpisodes['Season 12']
    createSeason(seasonTitle, season)
    break;
    case 'ss13':
    seasonTitle = 'Season 13'
    season = shippuudenEpisodes['Season 13']
    createSeason(seasonTitle, season)
    break;
    case 'ss14':
    seasonTitle = 'Season 14'
    season = shippuudenEpisodes['Season 14']
    createSeason(seasonTitle, season)
    break;
    case 'ss15':
    seasonTitle = 'Season 15'
    season = shippuudenEpisodes['Season 15']
    createSeason(seasonTitle, season)
    break;
    case 'ss16':
    seasonTitle = 'Season 16'
    season = shippuudenEpisodes['Season 16']
    createSeason(seasonTitle, season)
    break;
    case 'ss17':
    seasonTitle = 'Season 17'
    season = shippuudenEpisodes['Season 17']
    createSeason(seasonTitle, season)
    break;
    case 'ss18':
    seasonTitle = 'Season 18'
    season = shippuudenEpisodes['Season 18']
    createTable(seasonTitle, season)
    break;
    case 'ss19':
    seasonTitle = 'Season 19'
    season = shippuudenEpisodes['Season 19']
    createSeason(seasonTitle, season)
    break;
    case 'ss20':
    seasonTitle = 'Season 20'
    season = shippuudenEpisodes['Season 20']
    createSeason(seasonTitle, season)
    break;
    case 'ss21':
    seasonTitle = 'Season 21'
    season = shippuudenEpisodes['Season 21']
    createSeason(seasonTitle, season)
    break;
    case 'ssm':
    seasonTitle = 'Movies'
    season = shippuudenEpisodes['Movies']
    createSeason(seasonTitle, season)
    break;
  }
}

// elements used in creating table with pagination of episodes
let episodes = new Array()
let episodeList = new Array()
let seasonTitle = new Array()
let currentPage = 1
const numPerPage = 10
let numOfPages = 1
const currentPageInfo = document.getElementById('current-page')

//event listener for pagination buttons
const pageButtons = document.querySelectorAll('.table-page')
pageButtons.forEach(button => button.addEventListener('click', changePage))

// functions that creates the desired season episode table
function createSeason(title, season) {
  currentPage = 1
  seasonTitle = title
  episodeList = season
  getNumOfPages()
}

//function that gets total # of pages for pagination
function getNumOfPages() {
  numOfPages = Math.ceil((episodeList.length - 1) / numPerPage)
  createEpisodeList()
}

//functions to change pages of table
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


// function that creates the list of episodes and pagination for the table
function createEpisodeList() {
  let begin = ((currentPage - 1) * numPerPage)
  const end = begin + numPerPage
  episodes = episodeList.slice(begin, end)
  createTable()
}

// function that uses episode-template.hbs to create actual table
function createTable() {
  seasonTable.innerHTML = episodeTempate(episodes)
  currentPageInfo.innerHTML = `Page ${currentPage} of ${numOfPages}`
  const tableCaption = document.getElementById('season-number')
  tableCaption.innerHTML = seasonTitle
  tablePageSelect.style.display = 'flex'
}

// elements used in creating character and jutsu lists
const villageSelection = document.querySelector('.village-selection')
const jutsuSelection = document.querySelector('.jutsu-selection')
const jutsuCharacterContainer = document.getElementById('character-jutsu-container')
const jutsuCharacterTitle = document.getElementById('character-jutsu-container-title')

//event listeners used to create character and jutsu lists
const characterAndJutsuButtons = document.querySelectorAll('.character-jutsu-button')
characterAndJutsuButtons.forEach(button => button.addEventListener('click', showMenu))

const jutsuSelectionButtons = document.querySelectorAll('[name$=-jutsu]')
jutsuSelectionButtons.forEach(button => button.addEventListener('click', createJutsuList))

const villageSelectionButtons = document.querySelectorAll('[name$=-village]')
villageSelectionButtons.forEach(button => button.addEventListener('click', createCharacterList))

// function to chooose character or jutsu list to display
function showMenu() {
  switch(this.name){
    case 'jutsu':
    jutsuCharacterContainer.innerHTML = ''
    jutsuCharacterTitle.innerHTML = ''
    villageSelection.classList.remove('open')
    jutsuSelection.classList.add('open')
    break;
    case 'characters':
    jutsuCharacterContainer.innerHTML = ''
    jutsuCharacterTitle.innerHTML = ''
    jutsuSelection.classList.remove('open')
    villageSelection.classList.add('open')
    break;
  }
}

//function that creates list of selected jutsu
function createJutsuList() {
  let jutsuList = ''
  let jutsuTitle = ''
  switch(this.name) {
    case 'basic-jutsu':
    jutsuTitle = 'Basic Jutsu'
    jutsuList = jutsu['Basic Jutsu']
    createJutsuTemplate(jutsuTitle, jutsuList)
    break;
    case 's-jutsu':
    jutsuTitle = 'S-Rank Jutsu'
    jutsuList = jutsu['S-Rank Jutsu']
    createJutsuTemplate(jutsuTitle, jutsuList)
    break;
    case 'a-jutsu':
    jutsuTitle = 'A-Rank Jutsu'
    jutsuList = jutsu['A-Rank Jutsu']
    createJutsuTemplate(jutsuTitle, jutsuList)
    break;
    case 'b-jutsu':
    jutsuTitle = 'B-Rank Jutsu'
    jutsuList = jutsu['B-Rank Jutsu']
    createJutsuTemplate(jutsuTitle, jutsuList)
    break;
    case 'c-jutsu':
    jutsuTitle = 'C-Rank Jutsu'
    jutsuList = jutsu['C-Rank Jutsu']
    createJutsuTemplate(jutsuTitle, jutsuList)
    break;
    case 'd-jutsu':
    jutsuTitle = 'D-Rank Jutsu'
    jutsuList = jutsu['D-Rank Jutsu']
    createJutsuTemplate(jutsuTitle, jutsuList)
    break;
    case 'fire-jutsu':
    jutsuTitle = 'Fire/Katon Jutsu'
    jutsuList = jutsu['Katon - Fire']
    createJutsuTemplate(jutsuTitle, jutsuList)
    break;
    case 'wind-jutsu':
    jutsuTitle = 'Wind/Fuuton Jutsu'
    jutsuList = jutsu['Fuuton - Wind']
    createJutsuTemplate(jutsuTitle, jutsuList)
    break;
    case 'water-jutsu':
    jutsuTitle = 'Water/Suiton Jutsu'
    jutsuList = jutsu['Suiton - Water']
    createJutsuTemplate(jutsuTitle, jutsuList)
    break;
    case 'earth-jutsu':
    jutsuTitle = 'Earth/Doton Jutsu'
    jutsuList = jutsu['Doton - Earth']
    createJutsuTemplate(jutsuTitle, jutsuList)
    break;
    case 'lightening-jutsu':
    jutsuTitle = 'Lightening/Raiton Jutsu'
    jutsuList = jutsu['Raiton - Lightening']
    createJutsuTemplate(jutsuTitle, jutsuList)
    break;
    case 'blood-jutsu':
    jutsuTitle = 'Blood Line/Kekkei Genkai Jutsu'
    jutsuList = jutsu['Kekkei Genkai - Blood Line']
    createJutsuTemplate(jutsuTitle, jutsuList)
    break;
    case 'secret-jutsu':
    jutsuTitle = 'Secret Clan Jutsu'
    jutsuList = jutsu['Secret Clan Jutsu']
    createJutsuTemplate(jutsuTitle, jutsuList)
    break;
    case 'sage-jutsu':
    jutsuTitle = 'Sage/Senjutsu Jutsu'
    jutsuList = jutsu['Senjutsu - Sage']
    createJutsuTemplate(jutsuTitle, jutsuList)
    break;
  }
}

// function that creates list of chosen characters
function createCharacterList() {
  let villageName = ''
  let characterList = ''
  switch(this.name) {
    case 'leaf-village':
    villageName = 'Hidden Leaf/Konohagakure'
    characterList = characters['Konohagakure']
    createCharacterTemplate(villageName, characterList)
    break;
    case 'sand-village':
    villageName = 'Hidden Sand/Sunagakure'
    characterList = characters['Sunagakure']
    createCharacterTemplate(villageName, characterList)
    break;
    case 'cloud-village':
    villageName = 'Hidden Cloud/Kumogakure'
    characterList = characters['Kumogakure']
    createCharacterTemplate(villageName, characterList)
    break;
    case 'mist-village':
    villageName = 'Hidden Mist/Kirigakure'
    characterList = characters['Kirigakure']
    createCharacterTemplate(villageName, characterList)
    break;
    case 'rock-village':
    villageName = 'Hidden Rock/Iwagakure'
    characterList = characters['Iwagakure']
    createCharacterTemplate(villageName, characterList)
    break;
    case 'sound-village':
    villageName = 'Hidden Sound/Otogakure'
    characterList = characters['Otogakure']
    createCharacterTemplate(villageName, characterList)
    break;
    case 'rain-village':
    villageName = 'Hidden Rain/Amegakure'
    characterList = characters['Amegakure']
    createCharacterTemplate(villageName, characterList)
    break;
    case 'akatsuki-village':
    villageName = 'Akatsuki'
    characterList = characters['Akatsuki']
    createCharacterTemplate(villageName, characterList)
    break;
    case 'tail-village':
    villageName = 'Tailed Beasts/Bijuu'
    characterList = characters['Tailed Beasts']
    createCharacterTemplate(villageName, characterList)
    break;
  }
}


// function that creates list of jutsu using jutsu-template.hbs
function createJutsuTemplate(title, list) {
  jutsuCharacterTitle.innerHTML = title
  jutsuCharacterContainer.innerHTML = jutsuTemplate(list)
}

// function that creates list of characters using character-template.hbs
function createCharacterTemplate(village, characters) {
  jutsuCharacterTitle.innerHTML = village
  jutsuCharacterContainer.innerHTML = characterTemplate(characters)
}
