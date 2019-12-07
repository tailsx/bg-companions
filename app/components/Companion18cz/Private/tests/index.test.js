import React from 'react';
import { shallow } from 'enzyme';

import Private from '../index';

describe('<Private>', () => {
  it('should render component', () => {
    const priv = {
      id: 'private1',
      hasAbility: true,
      marketValue: 100,
      revenue: 30,
    };

    const component = shallow(<Private {...priv} />);

    expect(
      component
        .find('.private-revenue')
        .first()
        .text(),
    ).toBe(priv.revenue.toString());
    expect(
      component
        .find('.private-marketValue')
        .first()
        .text(),
    ).toBe(priv.marketValue.toString());
  });
});
