import React from 'react';
import { shallow } from 'enzyme';

import Train from '../index';

describe('<Train>', () => {
  it('should render component', () => {
    const trainProps = {
      id: 'train1',
      name: 'test-train',
      type: 'A',
      lastRan: 100,
    };
    const component = shallow(<Train {...trainProps} />);

    expect(
      component
        .find('.train-type')
        .first()
        .text(),
    ).toBe(trainProps.type);
    expect(
      component
        .find('.train-name')
        .first()
        .text(),
    ).toBe(trainProps.name);
    expect(
      component
        .find('.train-lastRan')
        .first()
        .text(),
    ).toBe(trainProps.lastRan.toString());
  });
});
