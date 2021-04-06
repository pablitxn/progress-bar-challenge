import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

test('types inside textarea', () => {
  console.log('asdas', screen.getByTestId('test'))
  // userEvent.click(screen.getByTestId('test'), 'Hello, World!')
  // expect(screen.getByRole('textbox')).toHaveValue('Hello, World!')
})
