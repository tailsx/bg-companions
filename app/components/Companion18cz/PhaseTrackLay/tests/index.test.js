import React from 'react';
import { shallow } from 'enzyme';

import Train from '../../Train';
import TurnTrackLay from '../index';

describe('<TurnTrackLay>', () => {
  const trains = [
    { type: 'train', name: 'test-train', lastRan: 100 },
    { type: 'train', name: 'test-train', lastRan: 100 },
  ];
  it('should render components', () => {
    const component = shallow(<TurnTrackLay trains={trains} />);

    expect(component.find(Train)).toHaveLength(trains.length);
  });
});
