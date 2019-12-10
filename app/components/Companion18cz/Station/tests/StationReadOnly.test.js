import React from 'react';
import { shallow } from 'enzyme';

import StationReadOnly from '../StationReadOnly';

describe('<StationReadOnly>', () => {
  it('should render station data', () => {
    const props = {
      id: 'train1',
      type: 'train1',
      amount: 123,
    };
    const component = shallow(<StationReadOnly {...props} />);

    expect(component.find('.station-type').text()).toEqual(props.type);
    expect(component.find('.station-amount').text()).toEqual(props.amount.toString());
  });
});
