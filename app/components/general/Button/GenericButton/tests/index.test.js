import React from 'react';
import { shallow } from 'enzyme';

import GenericButton from '../index';

describe('<Header />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<GenericButton />);
    expect(renderedComponent.length).toEqual(1);
  });

  it('should have a .btn class', () => {
    const component = shallow(<GenericButton />);

    expect(component.hasClass('btn')).toBeTruthy();
  });
});
