import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from '@Components/button';

describe('<Button />', () => {
  it('should have primary Background color', () => {
    render(
      <Button backgroundColor='primary' data-testid='button'>
        Confirm
      </Button>
    );

    const button = screen.getByTestId('button');

    expect(button).toBeVisible();
    expect(button).toHaveStyle({ backgroundColor: 'var(--primary-color)' });
  });

  it('should be enabled', () => {
    render(<Button data-testid='button' />);

    const button = screen.getByTestId('button');

    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  it('should trigger onClick event', () => {
    const onClick = jest.fn();
    render(<Button data-testid='button' onClick={onClick}></Button>);

    const button = screen.getByTestId('button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
