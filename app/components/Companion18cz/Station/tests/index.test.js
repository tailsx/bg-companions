import React from 'react';
import { shallow } from 'enzyme';

import Station from '../index';

describe('<Station>', () => {
  let component;
  let station;
  beforeEach(() => {
    station = {
      id: 'station1',
      type: 'test-station',
      amount: 100,
    };
    component = shallow(<Station {...station} />);
  });

  it('should render component', () => {
    expect(component.find('.station-type')).toBeDefined();
    expect(component.find('.station-amount')).toBeDefined();
  });

  it('should start in edit state', () => {
    expect(component.state().readOnly).toBeFalsy();
  });

  it('should render readonly values', () => {
    component.setState({ readOnly: true });
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

  it('should render edit values', () => {
    component.setState({ readOnly: false });
    expect(component.find('.station-type').props().value).toBe(station.type);
    expect(component.find('.station-amount').props().value).toBe(station.amount);
  });
});
