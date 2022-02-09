import { render, screen } from '@testing-library/react';

import { Currency } from '@Components/input';

describe('<Currency />', () => {
  it('should be enabled', () => {
    render(<Currency />);

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(input).toBeEnabled();
  });

  it('should be disabled', () => {
    render(<Currency disabled={true} />);

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();
  });

  it('should return currency formatted', () => {
    render(<Currency value='5000' />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveValue('5,000');
  });

  it('should have the dollar sign icon', () => {
    render(<Currency />);

    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();

    expect(img).toHaveAttribute('src');
    expect(img).toHaveAttribute('alt');
  });
});
