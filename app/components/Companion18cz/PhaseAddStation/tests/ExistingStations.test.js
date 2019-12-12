import React from 'react';
import { shallow } from 'enzyme';

const setup = propsOverrides => {
  const props = Object.assign(
    {
      stations: [
        { type: '$10', amount: 1 },
        { type: '$100', amount: 1 },
      ],
    },
    propsOverrides,
  );

  const wrapper = shallow(<ExistingStations {...props} />);

  return { props, wrapper };
};

describe('<ExistingStations>', () => {
  it('should render components', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.station')).toHaveLength(2);
  });
});
