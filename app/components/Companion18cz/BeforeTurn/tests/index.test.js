import React from 'react';
import { shallow } from 'enzyme';

import BeforeTurn from '../index';

describe('<18cz />', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = shallow(
      <BeforeTurn
        train={[]}
        stations={{ simple: 0, medium: 0, expensive: 0 }}
        privates={[]}
        treasury={0}
      />,
    );
  });

  it('should have a title', () => {
    expect(renderedComponent.find('h1').length).toBe(1);
  });
});
