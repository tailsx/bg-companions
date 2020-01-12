import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import GenericButton from '../index';

const DEFAULT_BUTTON_TEXT = 'Default Button';
const DEFAULT_CLASSNAME = 'rand-class';
const DEFAULT_ONCLICK = jest.fn();

const setup = propsOverride => {
  const props = {
    buttonText: DEFAULT_BUTTON_TEXT,
    className: DEFAULT_CLASSNAME,
    onClick: DEFAULT_ONCLICK,
    ...propsOverride,
  };
  const component = render(<GenericButton {...props} />);

  return { props, ...component };
};

describe('<GenericButton />', () => {
  describe('accessibility', () => {
    it('should have role', () => {
      const { getByRole } = setup();

      expect(getByRole('button')).toBeInTheDocument();
    });
  });

  it('should have a .btn class', () => {
    const { getByText } = setup();

    expect(getByText(DEFAULT_BUTTON_TEXT)).toHaveClass('btn');
  });

  it('should have onclick function work', () => {
    const { props, container } = setup();

    fireEvent.click(container.firstChild);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
