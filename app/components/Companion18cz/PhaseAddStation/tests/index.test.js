import React from 'react';
import { shallow } from 'enzyme';

import PhaseAddStation from '../index';
import NewStations from '../NewStations';
import ExistingStations from '../ExistingStations';

describe('<PhaseAddStation>', () => {
  let props;
  let component;
  beforeEach(() => {
    props = {
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
    component = shallow(<PhaseAddStation {...props} />);
  });

  it('should render existing stations', () => {
    expect(component.find('.station')).toHaveLength(2);
  });

  it('should render sections', () => {
    expect(component.find(NewStations)).toHaveLength(1);
    expect(component.find(ExistingStations)).toHaveLength(1);
  });
});
