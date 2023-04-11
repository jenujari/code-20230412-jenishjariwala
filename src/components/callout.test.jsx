import { render, screen } from '@testing-library/react';

import CallOut from './callout';

describe('CallOut', () => {
  // Test case: the component should render "Your Logo"
  it('should render "Your Logo"', () => {
   // Render the component
    render(<CallOut />);
    
    // Find the element with the test ID "logo"
    const logo = screen.getByTestId("logo");

    // Expect the element to have the text "Your Logo"
    expect(logo).toHaveTextContent("Your Logo");
  });
});