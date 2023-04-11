import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should render items on main page ', () => {
    render(<App />);

    const logo = screen.getByTestId("logo");
    const explore = screen.getByTestId("explore");
    const about = screen.getByTestId("about");
    const footer_logo = screen.getByTestId("footer_logo");

    expect(logo).toHaveTextContent("Your Logo");
    expect(explore).toHaveTextContent("Explore");
    expect(about).toHaveTextContent("About Us");
    expect(footer_logo).toHaveTextContent("Your Logo");
  });
});