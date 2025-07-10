import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from './Logo';

describe('Logo Component', () => {
  it('displays logo svg with correct alt text and accessibility', () => {
    render(<Logo />);
    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
  });
});
