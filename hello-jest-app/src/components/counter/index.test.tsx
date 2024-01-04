import { act, render, screen } from '@testing-library/react'
import Counter from '.'
import userEvent from '@testing-library/user-event'

describe('Counter', () => {
  it('Renders correctly', () => {
    render(<Counter />)

    const countElement = screen.getByRole('heading', { level: 1 })
    expect(countElement).toBeInTheDocument()

    const incrementButtonElement = screen.getByRole('button', {
      name: /increment/i,
    })
    expect(incrementButtonElement).toBeInTheDocument()

    const amountInputElement = screen.getByRole('spinbutton')
    expect(amountInputElement).toBeInTheDocument()

    const setButtonElement = screen.getByRole('button', { name: /set/i })
    expect(setButtonElement).toBeInTheDocument()
  })

  it('Renders a count of 0', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading', { level: 1 })
    expect(countElement).toHaveTextContent('0')
  })

  it('Renders a count of 1 after clicking the `increment` button', () => {
    render(<Counter />)

    const countText = screen.getByRole('heading', { level: 1 })
    const incrementButton = screen.getByRole('button', { name: /increment/i })

    expect(countText).toHaveTextContent('0')
    expect(incrementButton).toBeEnabled()

    act(() => {
      userEvent.click(incrementButton)
    })

    expect(countText).toHaveTextContent('1')
  })

  it('Renders a count of 2 after clicking the `increment` button twice', () => {
    render(<Counter />)

    const countText = screen.getByRole('heading', { level: 1 })
    const incrementButton = screen.getByRole('button', { name: /increment/i })

    expect(countText).toHaveTextContent('0')
    expect(incrementButton).toBeEnabled()

    act(() => userEvent.click(incrementButton))
    act(() => userEvent.click(incrementButton))

    expect(countText).toHaveTextContent('2')
  })

  it('Renders a count of 10 after clicking the `set` button', () => {
    render(<Counter />)

    const countText = screen.getByRole('heading', { level: 1 })
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', { name: /set/i })

    expect(countText).toHaveTextContent('0')
    expect(amountInput).toHaveValue(0)
    expect(setButton).toBeEnabled()

    act(() => {
      userEvent.type(amountInput, '10')
      userEvent.click(setButton)
    })

    expect(countText).toHaveTextContent('10')
  })

  it('Elements are focused in the right order', () => {
    render(<Counter />)

    const incrementButton = screen.getByRole('button', { name: /increment/i })
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', { name: /set/i })

    expect(incrementButton).not.toHaveFocus()
    expect(amountInput).not.toHaveFocus()
    expect(setButton).not.toHaveFocus()

    act(() => userEvent.tab())
    expect(incrementButton).toHaveFocus()

    act(() => userEvent.tab())
    expect(incrementButton).not.toHaveFocus()
    expect(amountInput).toHaveFocus()

    act(() => userEvent.tab())
    expect(amountInput).not.toHaveFocus()
    expect(setButton).toHaveFocus()
  })
})
