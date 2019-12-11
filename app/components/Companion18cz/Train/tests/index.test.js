import React from 'react';
import { shallow } from 'enzyme';

import Train from '../index';
import Edit from '../TrainEdit';
import ReadOnly from '../TrainReadOnly';

describe('<Train>', () => {
  let component;
  let train;
  beforeEach(() => {
    train = {
      id: 'train1',
      name: 'test-train',
      type: 'A',
      lastRan: 100,
    };
    component = shallow(<Train {...train} />);
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
