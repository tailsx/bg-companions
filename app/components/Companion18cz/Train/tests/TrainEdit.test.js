import React from 'react';
import { shallow } from 'enzyme';

import Edit from '../TrainEdit';

describe('<TrainEdit>', () => {
  it('should render edit fields', () => {
    const train = {
      id: 'train1',
      name: 'test-train',
      type: 'A',
      lastRan: 100,
    };
    const component = shallow(<Edit {...train} />);

    expect(component.find('.train-type').props().value).toBe(train.type);
    expect(component.find('.train-name').props().value).toBe(train.name);
    expect(component.find('.train-lastRan').props().value).toBe(train.lastRan);
  });
});
