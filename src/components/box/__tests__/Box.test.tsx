import { render, screen } from '@testing-library/react';

import { Box } from '@Components/box';

describe('<Box />', () => {
  it('should render empty Box', async () => {
    render(<Box data-testid='box' />);

    const box = screen.getByTestId('box');
    expect(box).toBeEmptyDOMElement();
  });

  it('should render Box component with text', async () => {
    render(<Box>Box component test</Box>);

    const box = await screen.findByText('Box component test');
    expect(box).toBeVisible();
  });
});
