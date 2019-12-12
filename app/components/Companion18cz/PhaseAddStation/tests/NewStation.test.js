import React from 'react';
import { shallow } from 'enzyme';

import NewStation from '../NewStation';

const setup = propsOverrides => {
  const props = Object.assign(
    { id: 'station1', type: '$10', amount: 1, onAmountChange: jest.fn() },
    propsOverrides,
  );

  const wrapper = shallow(<NewStation {...props} />);

  return { props, wrapper };
};

describe('<NewStations>', () => {
  it('should render components', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.station-add')).toHaveLength(1);
  });
});
