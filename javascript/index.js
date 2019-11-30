const narutoEpSelect = document.getElementById('naruto-episode-selection')
const shippuudenEpSelect = document.getElementById('shippuuden-episode-selection')

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
