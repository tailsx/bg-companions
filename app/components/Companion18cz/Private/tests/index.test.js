import React from 'react';
import { shallow } from 'enzyme';

import Private from '../index';

describe('<Private>', () => {
  it('should render component', () => {
    const revenue = 30;
    const marketValue = 100;
    const hasAbility = true;

    const component = shallow(
      <Private revenue={revenue} marketValue={marketValue} hasAbility={hasAbility} />,
    );

    expect(
      component
        .find('.private-revenue')
        .first()
        .text(),
    ).toBe(revenue.toString());
    expect(
      component
        .find('.private-marketValue')
        .first()
        .text(),
    ).toBe(marketValue.toString());
  });
});
