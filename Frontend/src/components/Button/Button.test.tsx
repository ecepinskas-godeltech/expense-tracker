import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  it('displays button based on specified props', () => {
    render(
      <Button
        text="Sign in"
        aria="Sign in to your account"
        disabled={false}
        type="primary"
      />,
    );
    const buttonElement = screen.getByAltText('Button');
    expect(buttonElement).toBeInTheDocument();
  });
});
