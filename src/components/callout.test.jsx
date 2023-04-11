import { render, screen } from '@testing-library/react';

import CallOut from './callout';

describe('CallOut', () => {
  it('should render "Your Logo"', () => {
    render(<CallOut />);
    
    const logo = screen.getByTestId("logo");

    expect(logo).toHaveTextContent("Your Logo");
  });
});