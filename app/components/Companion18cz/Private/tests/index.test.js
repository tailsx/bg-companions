import React from 'react';
import { shallow } from 'enzyme';

import Private from '../index';
import Edit from '../PrivateEdit';
import ReadOnly from '../PrivateReadOnly';

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
