import React from 'react';
import { shallow } from 'enzyme';

import ReadOnly from '../TrainReadOnly';

describe('<TrainReadOnly>', () => {
  it('should render train data', () => {
    const props = {
      id: 'train1',
      name: 'test-train',
      type: 'A',
      lastRan: 100,
    };
    const component = shallow(<ReadOnly {...props} />);

    expect(component.find('.train-name').text()).toEqual(props.name);
    expect(component.find('.train-type').text()).toEqual(props.type);
    expect(component.find('.train-lastRan').text()).toEqual(props.lastRan.toString());
  });
});
