import React from 'react';
import { shallow } from 'enzyme';

import PhaseOperating from '../index';

describe('<PhaseOperating>', () => {
  it('should render trains', () => {
    const props = {
      trains: [
        {
          type: 'train',
          name: 'train1',
          lastRan: 100,
        },
        {
          type: 'train',
          name: 'train2',
          lastRan: 100,
        },
        {
          type: 'train',
          name: 'train3',
          lastRan: 100,
        },
      ],
    };

    const component = shallow(<PhaseOperating {...props} />);
    expect(component.find('.train')).toHaveLength(3);
  });
});
