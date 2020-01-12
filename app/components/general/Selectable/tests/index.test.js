import React from 'react';
import { render } from '@testing-library/react';

import Selectable from '../index';

const DEFAULT_BUTTON_TEXT = 'default button text';
const DEFAULT_OPTIONS_ARRAY = ['option1', 'option2'];

const setup = propsOverride => {
  const props = {
    options: DEFAULT_OPTIONS_ARRAY,
    buttonText: DEFAULT_BUTTON_TEXT,
    ...propsOverride,
  };
  const component = render(<Selectable {...props} />);

  return { props, ...component };
};

describe('<Selectable />', () => {
  describe('accessbility', () => {
    it('should have a role', () => {
      const { getByRole } = setup();

      expect(getByRole('menu')).toBeInTheDocument();
    });
  });
});
