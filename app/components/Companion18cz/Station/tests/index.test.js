import React from 'react';
import { shallow } from 'enzyme';

import Station from '../index';

describe('<Station>', () => {
  it('should render component', () => {
    const station = {
      id: 'station1',
      type: 'test-station',
      amount: 100,
    };

    const component = shallow(<Station {...station} />);

    expect(
      component
        .find('.station-type')
        .first()
        .text(),
    ).toBe(station.type);
    expect(
      component
        .find('.station-amount')
        .first()
        .text(),
    ).toBe(station.amount.toString());
  });
});
