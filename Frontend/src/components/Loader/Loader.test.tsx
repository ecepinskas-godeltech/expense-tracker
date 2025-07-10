import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from './Loader';

describe('Loader Component', () => {
  it('displays css loader', () => {
    render(<Loader size="1" />);
    const loaderElement = screen.getByAltText('Loader');
    expect(loaderElement).toBeInTheDocument();
  });
});
