import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../../general/Input';
import Train from '../index';

const setup = propsOverrides => {
  const props = {
    id: 'train1',
    name: 'test-train',
    type: 'A',
    lastRan: 100,
    ...propsOverrides,
  };

  const wrapper = shallow(<Train {...props} />);

  return { props, wrapper };
};

describe('<Train>', () => {
  it('should render component and children', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Train)).toHaveLength(1);
    expect(wrapper.find(Input)).toHaveLength(3);
  });

  it('should be read only by default', () => {
    const { wrapper } = setup();

    wrapper.find(Input).forEach(input => expect(input.props().readOnly).toBeTruthy());
  });
});
