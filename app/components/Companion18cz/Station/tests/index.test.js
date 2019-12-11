import React from 'react';
import { shallow } from 'enzyme';

import Station from '../index';
import Edit from '../StationEdit';
import ReadOnly from '../StationReadOnly';

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

  it('should render edit mode on by default', () => {
    expect(component.find(ReadOnly)).toBeDefined();
    expect(component.find(Edit)).toEqual({});
  });

  it('should render readonly values', () => {
    component.setState({ readOnly: true });
    expect(component.find(ReadOnly)).toEqual({});
    expect(component.find(Edit)).toBeDefined();
  });
});
