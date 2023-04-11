import { render, screen } from "@testing-library/react";

// importing the App component from the local file
import App from "./App";

// defining a test suite for the App component
describe("App", () => {
  // defining a test case for rendering items on the main page
  it("should render items on main page ", () => {
    // rendering the App component
    render(<App />);

    // using the screen object to get elements by their testId attribute
    const logo = screen.getByTestId("logo");
    const explore = screen.getByTestId("explore");
    const about = screen.getByTestId("about");
    const footer_logo = screen.getByTestId("footer_logo");

    // using expect and toHaveTextContent to check if the elements have the expected text content
    expect(logo).toHaveTextContent("Your Logo");
    expect(explore).toHaveTextContent("Explore");
    expect(about).toHaveTextContent("About Us");
    expect(footer_logo).toHaveTextContent("Your Logo");
  });
});
