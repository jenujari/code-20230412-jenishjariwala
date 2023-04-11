import { render, screen } from '@testing-library/react';

import Explore from './explore';

describe('Explore', () => {
  // Test case: the component should render "Explore"
  it('should render "Explore"', () => {
    // Render the component
    render(<Explore />);
    
    // Find the element with the test ID "explore"
    const explore = screen.getByTestId("explore");

    // Expect the element to have the text "Explore"
    expect(explore).toHaveTextContent("Explore");
  });
});