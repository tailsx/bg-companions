import React from 'react';
import { shallow } from 'enzyme';

import BeforeTurn from 'components/Companion18cz/BeforeTurn';
import PhaseTrackLay from 'components/Companion18cz/PhaseTrackLay';
import PhaseAddStation from 'components/Companion18cz/PhaseAddStation';
import PhaseOperating from 'components/Companion18cz/PhaseOperating';
import PhaseTrainPurchase from 'components/Companion18cz/PhaseTrainPurchase';
import PhaseAcquistion from 'components/Companion18cz/PhaseAcquistion';
import Companion18cz from '../Companion18cz';
// import { mapDispatchToProps } from '../index';

const setup = propsOverrides => {
  const props = Object.assign({}, propsOverrides);

  const wrapper = shallow(<Companion18cz {...props} />);

  return { props, wrapper };
};

describe('<18cz />', () => {
  it('should render title', () => {
    const { wrapper } = setup();
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should render components', () => {
    const { wrapper } = setup();

    expect(wrapper.find(BeforeTurn)).toHaveLength(1);
    expect(wrapper.find(PhaseTrackLay)).toHaveLength(1);
    expect(wrapper.find(PhaseAddStation)).toHaveLength(1);
    expect(wrapper.find(PhaseOperating)).toHaveLength(1);
    expect(wrapper.find(PhaseTrainPurchase)).toHaveLength(1);
    expect(wrapper.find(PhaseAcquistion)).toHaveLength(1);
  });
});
