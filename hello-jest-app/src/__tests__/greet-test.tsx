import { render, screen } from "@testing-library/react";
import Greet from "../components/greet";

describe("Greet", () => {
  it("Renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    it("Renders a name", () => {
      render(<Greet />);
      const textElement = screen.getByText(/hello jest!/i);
      expect(textElement).toBeInTheDocument();
    });
  });
});
