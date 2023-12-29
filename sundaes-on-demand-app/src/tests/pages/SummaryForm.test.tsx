import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../../pages/summary-form";

test("Initial conditions", () => {
  render(<SummaryForm />);

  const checkboxElement: HTMLElement =
    screen.getByText(/terms and conditions/i);
  expect(checkboxElement).not.toBeChecked();

  const buttonElement: HTMLElement = screen.getByText(/confirm order/i);
  expect(buttonElement).toBeDisabled();
});

test("Checkbox enables button on first click and disables on second click", () => {
  render(<SummaryForm />);

  const checkbox: HTMLElement = screen.getByText(/terms and conditions/i);
  const confirmButton: HTMLElement = screen.getByText(/confirm order/i);

  act(() => {
    userEvent.click(checkbox);
  });
  expect(confirmButton).toBeEnabled();

  act(() => {
    userEvent.click(checkbox);
  });
  expect(confirmButton).toBeDisabled();
});

test("Popover responds to hover", async () => {
  render(<SummaryForm />);

  // popover starts out hidden
  let popover: HTMLElement | null = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(popover).not.toBeInTheDocument();

  // popover appears on mouseover of checbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  act(() => {
    userEvent.hover(termsAndConditions);
  });
  popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover dissapears on mouseleave
  act(() => {
    userEvent.unhover(termsAndConditions);
  });
  await waitFor(
    () => {
      expect(popover).not.toBeInTheDocument();
    },
    {
      timeout: 500,
    }
  );
});
