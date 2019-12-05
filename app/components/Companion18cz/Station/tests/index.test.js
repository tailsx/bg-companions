import React from 'react';
import { shallow } from 'enzyme';

import Station from '../index';

describe('<Station>', () => {
  it('should render component', () => {
    const type = 'test-station';
    const amount = 100;

    const component = shallow(<Station type={type} amount={amount} />);

    expect(
      component
        .find('.station-type')
        .first()
        .text(),
    ).toBe(type);
    expect(
      component
        .find('.station-amount')
        .first()
        .text(),
    ).toBe(amount.toString());
  });
});
