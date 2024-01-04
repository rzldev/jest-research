import MuiMode from '.'
import { render, screen } from '../../utils/test-utils'

describe('Mui Mode', () => {
  it('Renders text correctly', () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading', { level: 1 })

    expect(headingElement).toHaveTextContent('dark mode')
    // text in white color
    expect(headingElement).toHaveStyle({ color: "'rgb(255, 255, 255)'" })
  })
})
