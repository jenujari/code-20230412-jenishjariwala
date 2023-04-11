import { render, screen } from '@testing-library/react';

import Footer from './footer';

describe('Footer', () => {
  // Test case: the component should render "Your Logo"
  it('should render "Your Logo"', () => {
    // Render the component
    render(<Footer />);
    
    // Find the element with the test ID "footer_logo"
    const footer_logo = screen.getByTestId("footer_logo");

    // Expect the element to have the text "Your Logo"
    expect(footer_logo).toHaveTextContent("Your Logo");
  });
});