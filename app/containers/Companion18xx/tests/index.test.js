import React from 'react';
import { shallow } from 'enzyme';

import Companion18xx from '../Companion18xx';

const setup = propsOverrides => {
  const props = Object.assign({}, propsOverrides);

  const wrapper = shallow(<Companion18xx {...props} />);

  return { props, wrapper };
};

describe('<18cz />', () => {
  it('should render title', () => {
    const { wrapper } = setup();
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
