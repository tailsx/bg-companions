import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../../general/Input';
import Station from '../index';

const setup = propsOverrides => {
  const props = {
    id: 'station1',
    type: 'test-station',
    amount: 100,
    ...propsOverrides,
  };

  const wrapper = shallow(<Station {...props} />);

  return { props, wrapper };
};

describe('<Station>', () => {
  it('should render component and children', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Input)).toHaveLength(2);
  });

  /*   it('should be read only by default', () => {
    const { wrapper } = setup();

    wrapper.find(Input).forEach(input => expect(input.find('.input')).toHaveLength(1));
  }); */
});
