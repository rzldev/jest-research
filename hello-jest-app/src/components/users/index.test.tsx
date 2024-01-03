import Users from ".";
import { render, screen } from "../../utils/test-utils";
import { Response, Server } from "miragejs";
import mockServer from "../../mocks/server";
import API from "../../constants/api";

describe("Users", () => {
  let server: Server;
  beforeEach(() => {
    server = mockServer("test");
  });

  afterEach(() => {
    server.shutdown();
  });

  it("Renders correctly",  () => {
    render(<Users />);

    const headingElement = screen.getByRole("heading", { level: 1 });
    const listElement =  screen.getByRole("list");

    expect(headingElement).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();
  });

  it("Renders list of users", async () => {
    render(<Users />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).toHaveLength(3);
  });

  it("Renders error", async () => {
    server.get(
      API.USERS_ENDPOINT,
      () => new Response(500, undefined, "Error fetching users")
    );

    render(<Users />);
    const error = await screen.findByText("Error fetching users");
    expect(error).toBeInTheDocument();
  });
});
