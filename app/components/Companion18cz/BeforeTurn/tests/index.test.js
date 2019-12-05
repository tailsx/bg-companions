import React from 'react';
import { shallow } from 'enzyme';

import BeforeTurn from '../index';

describe('<BeforeTurn />', () => {
  it('should have a title', () => {
    const renderedComponent = shallow(<BeforeTurn />);
    expect(renderedComponent.find('h1').length).toBe(1);
  });

  describe('trains', () => {
    let trains;
    beforeEach(() => {
      trains = [
        { type: 'train', name: 'test-train', lastRan: 100 },
        { type: 'train', name: 'test-train', lastRan: 100 },
      ];
    });

    it('should have train components for each train', () => {
      const component = shallow(<BeforeTurn trains={trains} />);

      expect(component.find(Train)).toHaveLength(2);
      expect(
        component
          .find(Train)
          .at(0)
          .props(),
      ).toBe(trains[0]);
      expect(
        component
          .find(Train)
          .at(1)
          .props(),
      ).toBe(trains[1]);
    });
  });

  describe('stations', () => {
    let stations;
    beforeEach(() => {
      stations = [
        { type: '$10', amount: 1 },
        { type: '$100', amount: 1 },
      ];
    });

    it('should render compoent data', () => {
      const component = shallow(<BeforeTurn stations={stations} />);

      expect(component.find(Station)).toHaveLength(2);
      expect(
        component
          .find(Station)
          .at(0)
          .props(),
      ).toBe(stations[0]);
      expect(
        component
          .find(Station)
          .at(1)
          .props(),
      ).toBe(stations[1]);
    });
  });

  describe('privates', () => {
    let privates;
    beforeEach(() => {
      privates = [
        { revenue: 0, hasAbility: false, marketValue: 0 },
        { revenue: 0, hasAbility: false, marketValue: 0 },
      ];
    });

    it('should render compoent data', () => {
      const component = shallow(<BeforeTurn privates={privates} />);

      expect(component.find(privates)).toHaveLength(2);
      expect(
        component
          .find(Private)
          .at(0)
          .props(),
      ).toBe(privates[0]);
      expect(
        component
          .find(Private)
          .at(1)
          .props(),
      ).toBe(privates[1]);
    });

    describe('treasury', () => {
      let treasury;
      beforeEach(() => {
        treasury = 30;
      });

      it('should render data', () => {
        const component = shallow(<BeforeTurn treasury={treasury} />);
        expect(component.find(Treasury)).toHaveLength(2);
        expect(
          component
            .find(Treasury)
            .first()
            .props(),
        ).toBe({ treasury });
      });
    });
  });
});
