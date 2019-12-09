import React from 'react';
import { shallow } from 'enzyme';

import Train from '../index';

describe('<Train>', () => {
  it('should render component', () => {
    const trainProps = {
      id: 'train1',
      name: 'test-train',
      type: 'A',
      lastRan: 100,
    };
    const component = shallow(<Train {...trainProps} />);

    expect(component.find('.train-type')).toBeDefined();
    expect(component.find('.train-name')).toBeDefined();
    expect(component.find('.train-lastRan')).toBeDefined();
  });

  it('should render readonly values', () => {
    const trainProps = {
      id: 'train1',
      name: 'test-train',
      type: 'A',
      lastRan: 100,
    };

    const component = shallow(<Train {...trainProps} />);
    component.setState({ readOnly: true });

    expect(
      component
        .find('.train-type')
        .first()
        .text(),
    ).toBe(trainProps.type);
    expect(
      component
        .find('.train-name')
        .first()
        .text(),
    ).toBe(trainProps.name);
    expect(
      component
        .find('.train-lastRan')
        .first()
        .text(),
    ).toBe(trainProps.lastRan.toString());
  });

  it('should render edit values', () => {
    const trainProps = {
      id: 'train1',
      name: 'test-train',
      type: 'A',
      lastRan: 100,
    };

    const component = shallow(<Train {...trainProps} />);
    component.setState({ readOnly: false });

    expect(
      component
        .find('.train-type')
        .first()
        .props().value,
    ).toBe(trainProps.type);
    expect(
      component
        .find('.train-name')
        .first()
        .props().value,
    ).toBe(trainProps.name);
    expect(
      component
        .find('.train-lastRan')
        .first()
        .props().value,
    ).toBe(trainProps.lastRan);
  });

  it('should start in edit state', () => {
    const trainProps = {
      id: 'train1',
      name: 'test-train',
      type: 'A',
      lastRan: 100,
    };
    const component = shallow(<Train {...trainProps} />);

    expect(component.state().readOnly).toBeFalsy();
  });
});
