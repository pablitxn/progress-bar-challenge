// Progress bar percentage elements
const pct1 = document.getElementById('pct1')
const pct2 = document.getElementById('pct2')
const pct3 = document.getElementById('pct3')
const pct4 = document.getElementById('pct4')
const pct5 = document.getElementById('pct5')
const pct6 = document.getElementById('pct6')
const pct7 = document.getElementById('pct7')
const pct8 = document.getElementById('pct8')
const pct9 = document.getElementById('pct9')
const pct10 = document.getElementById('pct10')
const pct11 = document.getElementById('pct11')
const pct12 = document.getElementById('pct12')
const pct13 = document.getElementById('pct13')
const pct14 = document.getElementById('pct14')
const pct15 = document.getElementById('pct15')
// Controllers
const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const resetButton = document.getElementById('reset')

startButton.addEventListener('click', startProgressBar)
stopButton.addEventListener('click', stopProgressBar)
resetButton.addEventListener('click', resetProgressBar)

let percentage = 1
let intervalID

const addPercentage = () => percentage++
const resetPercentage = () => (percentage = 1)

function changeColor(pct) {
  percentage++
  switch (pct) {
    case 'pct1':
      pct1.classList.add('filled')
      break
    case 'pct2':
      pct2.classList.add('filled')
      break
    case 'pct3':
      pct3.classList.add('filled')
      break
    case 'pct4':
      pct4.classList.add('filled')
      break
    case 'pct5':
      pct5.classList.add('filled-yellow')
      break
    case 'pct6':
      pct6.classList.add('filled-yellow')
      break
    case 'pct7':
      pct7.classList.add('filled-yellow')
      break
    case 'pct8':
      pct8.classList.add('filled-yellow')
      break
    case 'pct9':
      pct9.classList.add('filled-orange')
      break
    case 'pct10':
      pct10.classList.add('filled-orange')
      break
    case 'pct11':
      pct11.classList.add('filled-orange')
      break
    case 'pct12':
      pct12.classList.add('filled-orange')
      break
    case 'pct13':
      pct13.classList.add('filled-red')
      break
    case 'pct14':
      pct14.classList.add('filled-red')
      break
    case 'pct15':
      pct15.classList.add('filled-finish')
      clearInterval(bar)
      break
    default:
      break
  }
}

function stopProgressBar() {
  clearInterval(bar)
}

function startProgressBar() {
  bar = setInterval(() => changeColor(`pct${percentage}`), 500)
}

function resetProgressBar() {
  pct1.classList.remove('filled')
  pct2.classList.remove('filled')
  pct3.classList.remove('filled')
  pct4.classList.remove('filled')
  pct5.classList.remove('filled-yellow')
  pct6.classList.remove('filled-yellow')
  pct7.classList.remove('filled-yellow')
  pct8.classList.remove('filled-yellow')
  pct9.classList.remove('filled-orange')
  pct10.classList.remove('filled-orange')
  pct11.classList.remove('filled-orange')
  pct12.classList.remove('filled-orange')
  pct13.classList.remove('filled-red')
  pct14.classList.remove('filled-red')
  pct15.classList.remove('filled-finish')
  percentage = 1
}
