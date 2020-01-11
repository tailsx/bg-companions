import React from 'react';
import { shallow } from 'enzyme';

import GenericButton from '../index';

const DEFAULT_BUTTON_TEXT = 'Default Button';
const DEFAULT_CLASSNAME = 'rand-class';

const setup = propsOverride => {
  const props = {
    buttonText: DEFAULT_BUTTON_TEXT,
    className: DEFAULT_CLASSNAME,
    ...propsOverride,
  };
  const component = shallow(<GenericButton {...props} />);

  return { props, component };
};

describe('<GenericButton />', () => {
  it('should render a div', () => {
    const { component } = setup();
    expect(component.length).toEqual(1);
  });

  it('should have a .btn class', () => {
    const { component } = setup();

    expect(component.hasClass('btn')).toBeTruthy();
  });
});
