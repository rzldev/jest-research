import userEvent from "@testing-library/user-event";
import CounterTwo from ".";
import { act, render, screen } from "../../utils/test-utils";

describe("Counter Two", () => {
  it("Renders correctly", () => {
    render(<CounterTwo count={0} />);

    const headingElement = screen.getByRole("heading", { level: 1 });
    const countElement = screen.getByTestId("counter");
    const incrementButtonElement = screen.queryByRole("button", {
      name: /increment/i,
    });
    const decrementButtonElement = screen.queryByRole("button", {
      name: /decrement/i,
    });

    expect(headingElement).toBeInTheDocument();
    expect(countElement).toBeInTheDocument();
    expect(countElement).toHaveTextContent("0");
    expect(incrementButtonElement).not.toBeInTheDocument();
    expect(decrementButtonElement).not.toBeInTheDocument();
  });

  it("Handlers are called", () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        onIncrement={incrementHandler}
        onDecrement={decrementHandler}
      />
    );

    const countElement = screen.getByTestId("counter");
    const incrementButtonElement = screen.getByRole("button", {
      name: /increment/i,
    });
    const decrementButtonElement = screen.getByRole("button", {
      name: /decrement/i,
    });

    expect(countElement).toHaveTextContent("0");

    act(() => userEvent.click(incrementButtonElement));
    act(() => userEvent.click(decrementButtonElement));

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
