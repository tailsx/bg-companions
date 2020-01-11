import React from 'react';
import { shallow } from 'enzyme';

import Selectable from '../index';

const DEFAULT_BUTTON_TEXT = 'default button text';
const DEFAULT_OPTIONS_ARRAY = ['option1', 'option2'];

const setup = propsOverride => {
  const props = {
    options: DEFAULT_OPTIONS_ARRAY,
    buttonText: DEFAULT_BUTTON_TEXT,
    ...propsOverride,
  };
  const component = shallow(<Selectable {...props} />);

  return { props, component };
};

describe('<Selectable />', () => {
  it('should render elements equal to input', () => {
    const { component, props } = setup();

    expect(component.find('option')).toHaveLength(props.options.length);
  });

  it('should have select tag nested inside label', () => {
    const { component } = setup();

    expect(component.find('label')).toHaveLength(1);
  });
});
