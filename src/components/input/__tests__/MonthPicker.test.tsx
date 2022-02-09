import { render, screen, fireEvent, getByTitle } from '@testing-library/react';

import { MonthPicker } from '@Components/input';

const initialDate = new Date(1998, 4, 8, 0, 15);

describe('<MonthPicker />', () => {
  it('back month button should be enabled', () => {
    const date = new Date();
    render(<MonthPicker initialDate={date} />);

    const button = screen.getByTitle('Back month button');

    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  it('forward month button should be enabled', () => {
    const date = new Date();
    render(<MonthPicker initialDate={date} />);

    const button = screen.getByTitle('Forward month button');

    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  it('should back month', () => {
    const onChange = jest.fn();
    render(
      <MonthPicker
        initialDate={initialDate}
        onChange={onChange}
        month='March'
        year={2021}
      />
    );

    const backMonthButton = screen.getByTitle('Back month button');
    fireEvent.click(backMonthButton);

    const month = screen.getByText('March');
    const year = screen.getByText('2021');

    expect(month).toBeInTheDocument();
    expect(year).toBeInTheDocument();
  });

  it('should forward month', () => {
    const onChange = jest.fn();
    render(
      <MonthPicker
        initialDate={initialDate}
        onChange={onChange}
        month='May'
        year={2021}
      />
    );

    const backMonthButton = screen.getByTitle('Back month button');
    fireEvent.click(backMonthButton);

    const month = screen.getByText('May');
    const year = screen.getByText('2021');

    expect(month).toBeInTheDocument();
    expect(year).toBeInTheDocument();
  });
});
