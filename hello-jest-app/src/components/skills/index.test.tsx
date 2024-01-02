import { logRoles, render, screen } from "@testing-library/react";
import Skills from ".";

describe("Skills", () => {
  const skills: string[] = ["HTML", "CSS", "JavaScript"];

  it("Renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  it("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemmElements = screen.getAllByRole("listitem");
    expect(listItemmElements).toHaveLength(skills.length);
  });

  it("Renders `Login` button", () => {
    render(<Skills skills={skills} />);
    const loginButtonElement = screen.getByRole("button", { name: /login/i });
    expect(loginButtonElement).toBeInTheDocument();
  });

  it("`Start Learning` button is not rendered", () => {
    render(<Skills skills={skills} />);
    const learningButtonElement = screen.queryByRole("button", {
      name: /start learning/i,
    });
    expect(learningButtonElement).not.toBeInTheDocument();
  });

  it("`Start Learning` button is eventually displayed", async () => {
    const view = render(<Skills skills={skills} />);

    logRoles(view.container);

    const learningButtonElement = await screen.findByRole(
      "button",
      { name: /start learning/i },
      { timeout: 2000 }
    );

    // screen.debug();

    expect(learningButtonElement).toBeInTheDocument();
  });
});
