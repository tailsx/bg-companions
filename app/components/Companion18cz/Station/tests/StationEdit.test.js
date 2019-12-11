import React from 'react';
import { shallow } from 'enzyme';

import StationEdit from '../StationEdit';

describe('<StationEdit>', () => {
  it('should render edit fields', () => {
    const station = {
      type: 'train-type',
      amount: 100,
    };
    const component = shallow(<StationEdit {...station} />);

    expect(component.find('.station-type').props().value).toBe(station.type);
    expect(component.find('.station-amount').props().value).toBe(station.amount);
  });
});
