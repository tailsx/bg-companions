import React from 'react';
import { shallow } from 'enzyme';

import Train from '../index';

describe('<Train>', () => {
  it('should render component', () => {
    const type = 'A';
    const name = 'test-train';
    const lastRan = 100;

    const component = shallow(<Train name="test-train" lastRan={100} type="A" />);

    expect(
      component
        .find('.train-type')
        .first()
        .text(),
    ).toBe(type);
    expect(
      component
        .find('.train-name')
        .first()
        .text(),
    ).toBe(name);
    expect(
      component
        .find('.train-lastRan')
        .first()
        .text(),
    ).toBe(lastRan.toString());
  });
});
