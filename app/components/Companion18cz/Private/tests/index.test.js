import React from 'react';
import { shallow } from 'enzyme';

import Private from '../index';

describe('<Private>', () => {
  let priv;
  let component;
  beforeEach(() => {
    priv = {
      id: 'private1',
      hasAbility: true,
      marketValue: 100,
      revenue: 30,
    };
    component = shallow(<Private {...priv} />);
  });

  it('should render component', () => {
    expect(component.find('.private-revenue')).toBeDefined();
    expect(component.find('.private-marketValue')).toBeDefined();
  });

  it('should start in edit state', () => {
    expect(component.state().readOnly).toBeFalsy();
  });

  it('should have correct edit values', () => {
    component.setState({ readOnly: false });
    expect(component.find('.private-revenue').props().value).toBe(priv.revenue);
    expect(component.find('.private-marketValue').props().value).toBe(priv.marketValue);
  });

  it('should have correct readonly values', () => {
    component.setState({ readOnly: true });
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
