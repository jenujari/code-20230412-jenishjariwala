import { render, screen } from '@testing-library/react';

import Footer from './footer';

describe('Footer', () => {
  it('should render "Your Logo"', () => {
    render(<Footer />);
    
    const footer_logo = screen.getByTestId("footer_logo");

    expect(footer_logo).toHaveTextContent("Your Logo");
  });
});