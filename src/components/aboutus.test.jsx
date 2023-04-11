import { render, screen } from '@testing-library/react';

import AbooutUs from './aboutus';

describe('AbooutUs', () => {
  it('should render "About Us"', () => {
    render(<AbooutUs />);
    
    const about = screen.getByTestId("about");

    expect(about).toHaveTextContent("About Us");
  });
});