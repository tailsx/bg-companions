import React from 'react';
import { shallow } from 'enzyme';

import BeforeTurn from 'components/Companion18cz/BeforeTurn';
import TurnTrackLay from 'components/Companion18cz/TurnTrackLay';
import Companion18cz from '../Companion18cz';
// import { mapDispatchToProps } from '../index';

describe('<18cz />', () => {
  it('should render title', () => {
    const renderedComponent = shallow(<Companion18cz />);
    expect(renderedComponent.find('h1')).toHaveLength(1);
  });

  it('should render components', () => {
    const component = shallow(<Companion18cz />);

    expect(component.find(BeforeTurn)).toHaveLength(1);
    expect(component.find(TurnTrackLay)).toHaveLength(1);
  });
});
