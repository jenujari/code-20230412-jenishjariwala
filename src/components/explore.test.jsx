import { render, screen } from '@testing-library/react';

import Explore from './explore';

describe('Explore', () => {
  it('should render "Explore"', () => {
    render(<Explore />);
    
    const explore = screen.getByTestId("explore");

    expect(explore).toHaveTextContent("Explore");
  });
});