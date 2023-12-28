import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { kebabCaseToTitleCase } from "./helpers";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Button click flow", () => {
  render(<App />);

  // find an element with a role of button and text matching /blue/i
  const buttonElement = screen.getByRole('button', {name: /blue/i});

  // expect the class to be red
  expect(buttonElement).toHaveClass('medium-violet-red');

  // click button
  fireEvent.click(buttonElement);

  // expect the class to be blue
  expect(buttonElement).toHaveClass('midnight-blue');

  // expect the button text to match /red/i
  expect(buttonElement).toHaveTextContent(/red/i);
});

test("Checkbox flow", () => {
  render(<App />);

  // find elements
  const buttonElement = screen.getByRole('button', {name: /blue/i});
  const checkboxElement = screen.getByRole('checkbox', {name: /disable button/i});

  // check initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  // click checkbox to disable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass('gray');

  // click checkbox to re-enabled button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass('medium-violet-red');
});

test("Checkbox flow after button click", () => {
  render(<App />);

  // find elements
  const buttonElement = screen.getByRole('button', {name: /blue/i});
  const checkboxElement = screen.getByRole('checkbox', {name: /disable button/i});

  // click button to change to blue
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveClass('midnight-blue');

  // click checkbox to disable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass('gray');

  // click checkbox to re-enable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass('midnight-blue');
});

describe("kebabCaseToTitleCase", () => {
  test('Works for no hypens',() => {
    expect(kebabCaseToTitleCase('red')).toBe('Red');
  });

  test('Works for one hypen', () => {
    expect(kebabCaseToTitleCase('midnight-blue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner hypens', () => {
    expect(kebabCaseToTitleCase('medium-violet-red')).toBe('Medium Violet Red');
  });
});
