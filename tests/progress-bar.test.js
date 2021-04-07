import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

describe('Progress bar', () => {
  document.body.innerHTML = `
  <main class="main">
  <div class="progress-bar">
    <div data-testid="pct1" id="pct1" class="bar-square"></div>
    <div data-testid="pct2" id="pct2" class="bar-square"></div>
    <div data-testid="pct3" id="pct3" class="bar-square"></div>
    <div data-testid="pct4" id="pct4" class="bar-square"></div>
    <div data-testid="pct5" id="pct5" class="bar-square"></div>
    <div data-testid="pct6" id="pct6" class="bar-square"></div>
    <div data-testid="pct7" id="pct7" class="bar-square"></div>
    <div data-testid="pct8" id="pct8" class="bar-square"></div>
    <div data-testid="pct9" id="pct9" class="bar-square"></div>
    <div data-testid="pct10" id="pct10" class="bar-square"></div>
    <div data-testid="pct11" id="pct11" class="bar-square"></div>
    <div data-testid="pct12" id="pct12" class="bar-square"></div>
    <div data-testid="pct13" id="pct13" class="bar-square"></div>
    <div data-testid="pct14" id="pct14" class="bar-square"></div>
    <div data-testid="pct15" id="pct15" class="bar-square"></div>
  </div>
  <div class="options">
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <button id="reset">Reset</button>
  </div>
</main>
  `

  it('should change color bar in each load', () => {
    const startButton = screen.getByText('Start')
    const percentage = 1
    // Progress bar
    const pct1 = screen.getByTestId('pct1')
    const pct2 = screen.getByTestId('pct2')
    const pct3 = screen.getByTestId('pct3')
    const pct4 = screen.getByTestId('pct4')
    const pct5 = screen.getByTestId('pct5')
    const pct6 = screen.getByTestId('pct6')
    const pct7 = screen.getByTestId('pct7')
    const pct8 = screen.getByTestId('pct8')
    const pct9 = screen.getByTestId('pct9')
    const pct10 = screen.getByTestId('pct10')
    const pct11 = screen.getByTestId('pct11')
    const pct12 = screen.getByTestId('pct12')
    const pct13 = screen.getByTestId('pct13')
    const pct14 = screen.getByTestId('pct14')
    const pct15 = screen.getByTestId('pct15')

    userEvent.click(startButton)
    function helperTest(pct) {
      percentage++
      switch (pct) {
        case 'pct1':
          jest.advanceTimersByTime(500)
          expect(pct1).toHaveStyle('background-color: chartreuse;')
          break
        case 'pct2':
          jest.advanceTimersByTime(500)
          expect(pct2).toHaveStyle('background-color: chartreuse;')
          break
        case 'pct3':
          expect(pct3).toHaveStyle('background-color: chartreuse;')
          break
        case 'pct4':
          expect(pct4).toHaveStyle('background-color: chartreuse;')
          break
        case 'pct5':
          expect(pct5).toHaveStyle('background-color: yellow;')
          break
        case 'pct6':
          expect(pct6).toHaveStyle('background-color: yellow;')
          break
        case 'pct7':
          expect(pct7).toHaveStyle('background-color: yellow;')
          break
        case 'pct8':
          expect(pct8).toHaveStyle('background-color: yellow;')
          break
        case 'pct9':
          expect(pct9).toHaveStyle('background-color: tomato;')
          break
        case 'pct10':
          expect(pct10).toHaveStyle('background-color: tomato;')
          break
        case 'pct11':
          expect(pct11).toHaveStyle('background-color: tomato;')
          break
        case 'pct12':
          expect(pct12).toHaveStyle('background-color: tomato;')
          break
        case 'pct13':
          expect(pct13).toHaveStyle('background-color: rgb(201, 73, 99);')
          break
        case 'pct14':
          expect(pct14).toHaveStyle('background-color: rgb(201, 73, 99);')
          break
        case 'pct15':
          expect(pct15).toHaveStyle('background-color: red;')
          clearInterval(testTimmer)
          break
        default:
          break
      }
    }

    setInterval(() => helperTest(`pct${percentage}`))
  })
  // test('should restart when click button', () => {})
  // test('should stop and restart again from the same percentage', () => {})
})
