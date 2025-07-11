import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputLabel from './InputLabel';

describe('InputLabel Component', () => {
  it('displays input label based on specified props', () => {
    render(<InputLabel text="Label" htmlFor="input" type="label" />);
    const inputLabelElement = screen.getByAltText('InputLabel');
    expect(inputLabelElement).toBeInTheDocument();
  });
});
