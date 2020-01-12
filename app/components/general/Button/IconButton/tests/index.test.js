import React from 'react';
import { render } from '@testing-library/react';

import IconButton from '../index';

const DEFAULT_ICON_CLASS = 'icon-ok';
const DEFAULT_CLASSNAME = 'rand-class';

const setup = propsOverride => {
  const props = {
    iconClass: DEFAULT_ICON_CLASS,
    className: DEFAULT_CLASSNAME,
    ...propsOverride,
  };
  const component = render(<IconButton {...props} />);

  return { props, ...component };
};

describe('<IconButton />', () => {
  describe('accessibility', () => {
    it('should have role', () => {
      const { getByRole } = setup();

      expect(getByRole('button')).toBeInTheDocument();
    });
  });

  it('should render button with icon', () => {
    const { container } = setup();

    expect(container.firstChild).toHaveClass(DEFAULT_CLASSNAME);
    expect(container.firstChild);
  });
});
