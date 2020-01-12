import React from 'react';
import { render } from '@testing-library/react';

import Treasury from '../index';

const DEFAULT_TREASURY = 700;
const DEFAULT_RADIX = 10;

const setup = propsOverride => {
  const props = {
    treasury: DEFAULT_TREASURY,
    ...propsOverride,
  };
  const component = render(<Treasury {...props} />);

  return { props, ...component };
};

describe('<Treasury />', () => {
  it('should render the treasury value', () => {
    const { getByText } = setup();

    expect(
      getByText(`${DEFAULT_TREASURY.toString(DEFAULT_RADIX)}`, { exact: false }),
    ).toBeInTheDocument();
  });
});
