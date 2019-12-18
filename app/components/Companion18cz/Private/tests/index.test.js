import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../../general/Input';
import Private from '../index';

const setup = propsOverrides => {
  const props = {
    id: 'private1',
    hasAbility: true,
    marketValue: 100,
    revenue: 30,
    ...propsOverrides,
  };

  const wrapper = shallow(<Private {...props} />);

  return { props, wrapper };
};

describe('<Private>', () => {
  it('should render component and children', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Input)).toHaveLength(3);
  });

  /*   it('should be read only by default', () => {
    const { wrapper } = setup();

    wrapper.find(Input).forEach(input => expect(input.find('.input')).toHaveLength(1));
  }); */
});
