import { render, screen } from '@testing-library/react'
import Application from '.'

describe('Application', () => {
  it('Renders', () => {
    render(<Application />)

    const pageHeading = screen.getByRole('heading', { level: 1 })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', { level: 2 })
    expect(sectionHeading).toBeInTheDocument()

    const paragraphElement = screen.getByText(/all fields are mandatory/i)
    expect(paragraphElement).toBeInTheDocument()

    const closeElement = screen.getByTitle(/close/i)
    expect(closeElement).toBeInTheDocument()

    const imageElement = screen.getByAltText(/little cat$/i)
    expect(imageElement).toBeInTheDocument()

    const customElement = screen.getByTestId(/custom-element/i)
    expect(customElement).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', { name: /name/i })
    expect(nameElement).toBeInTheDocument()

    const nameElementByText = screen.getByLabelText(/name/i, {
      selector: 'input',
    })
    expect(nameElementByText).toBeInTheDocument()

    const nameElementByPlaceholder = screen.getByPlaceholderText('Fullname')
    expect(nameElementByPlaceholder).toBeInTheDocument()

    const nameElementByDisplayValue = screen.getByDisplayValue(/jest/i)
    expect(nameElementByDisplayValue).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', { name: /bio/i })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const termsElementByText = screen.getByLabelText(
      /i agree to the terms and conditions/i,
    )
    expect(termsElementByText).toBeInTheDocument()

    const submitElement = screen.getByRole('button')
    expect(submitElement).toBeInTheDocument()
    expect(submitElement).not.toBeEnabled()
  })
})
