import { render, screen } from '@testing-library/react';

import { Header } from '@Components/header';

describe('<Header />', () => {
  it('should render Header component', () => {
    render(<Header />);

    const header = screen.getByRole('banner');

    expect(header).toBeVisible();
    expect(header).toBeInTheDocument();
  });

  it('should render image logo inside <header />', () => {
    render(<Header />);

    const header = screen.getByRole('banner');

    expect(header).toBeInTheDocument();

    const img = screen.getByRole('img');
    expect(header).toContainElement(img);
  });

  it('image should have src attribute', () => {
    render(<Header />);

    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src');
  });

  it('image should have alt attribute', () => {
    render(<Header />);

    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt');
  });
});
