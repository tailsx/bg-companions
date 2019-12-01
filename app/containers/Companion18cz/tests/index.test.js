import React from 'react';
import { shallow } from 'enzyme';

import Companion18cz from '../index';

describe('<18cz />', () => {
  it('should render title', () => {
    const renderedComponent = shallow(<Companion18cz />);
    expect(renderedComponent.find('h1').length).toBe(1);
  });
});
