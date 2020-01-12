import React from 'react';
import { render } from '@testing-library/react';

import EditableInput from '../index';

const DEFAULT_CAN_EDIT = true;
const DEFAULT_VALUE = 'default value';
const DEFAULT_INPUT_TYPE = 'text';
const DEFAULT_LABEL = 'default label';

const setup = propsOverride => {
  const props = {
    canEdit: DEFAULT_CAN_EDIT,
    value: DEFAULT_VALUE,
    inputType: DEFAULT_INPUT_TYPE,
    label: DEFAULT_LABEL,
    ...propsOverride,
  };
  const component = render(<EditableInput {...props} />);

  return { props, ...component };
};

describe('<EditableInput />', () => {
  describe('accessibility', () => {
    it('should have aria role', () => {
      const { getByRole } = setup();

      expect(getByRole('textbox')).toBeInTheDocument();
    });

    it('should have input nested inside label for accessibility', () => {
      const { getByLabelText } = setup();

      expect(getByLabelText(DEFAULT_LABEL)).toBeInTheDocument();
    });
  });
});
