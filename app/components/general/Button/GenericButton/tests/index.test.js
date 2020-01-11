import React from 'react';
import { shallow } from 'enzyme';

import GenericButton from '../index';

const setup = propsOverride => {
  const props = {
    buttonText: 'Default Button',
    className: 'rand-class',
    ...propsOverride,
  };
  const component = shallow(<GenericButton {...props} />);

  return { props, component };
};

describe('<Header />', () => {
  it('should render a div', () => {
    const { component } = setup();
    expect(component.length).toEqual(1);
  });

  it('should have a .btn class', () => {
    const { component } = setup();

    expect(component.hasClass('btn')).toBeTruthy();
  });
});
