import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Icon from './Icon';

describe('Icon Component', () => {
  it('displays icon with specified prop', () => {
    render(<Icon iconName="Bell" />);
    const iconElement = screen.getByAltText('Icon');
    expect(iconElement).toBeInTheDocument();
  });
});
