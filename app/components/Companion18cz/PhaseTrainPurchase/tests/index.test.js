import React from 'react';
import { shallow } from '';

import PhaseTrainPurchase from '../index';

describe('<PhaseTrainPurchase>', () => {
  it('should render existing trains', () => {
    const props = {
      trains: [
        {
          id: 'train1',
          type: 'train',
          name: 'train1',
          lastRan: 100,
        },
        {
          id: 'train2',
          type: 'train',
          name: 'train2',
          lastRan: 100,
        },
      ],
    };
    const component = shallow(<PhaseTrainPurchase {...props} />);

    expect(component.find('.train')).toHaveLength(2);
  });
});
