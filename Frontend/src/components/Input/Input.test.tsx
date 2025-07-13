import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';
import { onInputChange } from '@/utils/onInputChange';

describe('Input Component', () => {
  it('displays input based on specified props', () => {
    render(
      <Input
        type="text"
        name="test"
        placeholder="Text input"
        aria="Input field for title"
        defaultValue=""
        onChange={onInputChange}
        helperText="Enter your name"
        helperTextType="caption"
        errorMessage="Field can not be empty"
      />,
    );
    const inputElement = screen.getByAltText('Input');
    expect(inputElement).toBeInTheDocument();
  });
});
