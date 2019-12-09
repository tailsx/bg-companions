import React from 'react';
import { shallow } from 'enzyme';

import BeforeTurn from 'components/Companion18cz/BeforeTurn';
import PhaseTrackLay from 'components/Companion18cz/PhaseTrackLay';
import PhaseAddStation from 'components/Companion18cz/PhaseAddStation';
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
    expect(component.find(PhaseTrackLay)).toHaveLength(1);
    expect(component.find(PhaseAddStation)).toHaveLength(1);
  });
});
