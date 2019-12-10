import React from 'react';
import { shallow } from 'enzyme';

import PhaseAcquistion from '../index';

describe('<PhaseAcquistion>', () => {
  it('should render treasury', () => {
    const props = {
      treasury: 30,
    };
    const component = shallow(<PhaseAcquistion {...props} />);

    expect(component.find('.treasury')).toHaveLength(1);
  });
});
