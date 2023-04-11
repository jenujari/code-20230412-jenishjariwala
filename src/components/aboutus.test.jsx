import { render, screen } from '@testing-library/react';

import AbooutUs from './aboutus';

describe('AbooutUs', () => {
  // Test case: the component should render "About Us"
  it('should render "About Us"', () => {
    // Render the component
    render(<AbooutUs />);

    // Find the element with the test ID "about"
    const about = screen.getByTestId("about");

    // Expect the element to have the text "About Us"
    expect(about).toHaveTextContent("About Us");
  });
});