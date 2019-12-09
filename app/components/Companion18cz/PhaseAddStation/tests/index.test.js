import React from 'react';
import { shallow } from 'enzyme';

import PhaseAddStation from '../index';

describe('<PhaseAddStation>', () => {
  it('should render existing stations', () => {
    const props = {
      stations: [
        {
          type: '$10',
          amount: 1,
        },
        {
          type: '$100',
          amount: 1,
        },
      ],
    };
    const component = shallow(<PhaseAddStation {...props} />);

    expect(component.find('.station')).toHaveLength(2);
  });
});
