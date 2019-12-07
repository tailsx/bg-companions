import React from 'react';
import { shallow } from 'enzyme';

import BeforeTurn from '../index';
import Private from '../../Private';
import Station from '../../Station';
import Train from '../../Train';
import Treasury from '../../Treasury';

describe('<BeforeTurn />', () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      privatesData: {
        privates: [
          { revenue: 0, hasAbility: false, marketValue: 0 },
          { revenue: 0, hasAbility: false, marketValue: 0 },
        ],
      },
      stationsData: {
        stations: [
          { type: '$10', amount: 1 },
          { type: '$100', amount: 1 },
        ],
      },
      trainsData: {
        trains: [
          { type: 'train', name: 'test-train', lastRan: 100 },
          { type: 'train', name: 'test-train', lastRan: 100 },
        ],
      },
      treasury: 100,
    };
  });
  it('should have a title', () => {
    const component = shallow(<BeforeTurn {...defaultProps} />);
    expect(component.find('h1')).toHaveLength(1);
  });

  describe('trains', () => {
    it('should have train components for each train', () => {
      const {
        trainsData: { trains },
      } = defaultProps;
      const component = shallow(<BeforeTurn {...defaultProps} />);

      expect(component.find(Train)).toHaveLength(2);
      expect(
        component
          .find(Train)
          .at(0)
          .props(),
      ).toMatchObject(trains[0]);
      expect(
        component
          .find(Train)
          .at(1)
          .props(),
      ).toMatchObject(trains[1]);
    });
  });

  describe('stations', () => {
    it('should render compoent data', () => {
      const {
        stationsData: { stations },
      } = defaultProps;
      const component = shallow(<BeforeTurn {...defaultProps} />);

      expect(component.find(Station)).toHaveLength(2);
      expect(
        component
          .find(Station)
          .at(0)
          .props(),
      ).toMatchObject(stations[0]);
      expect(
        component
          .find(Station)
          .at(1)
          .props(),
      ).toMatchObject(stations[1]);
    });
  });

  describe('privates', () => {
    it('should render compoent data', () => {
      const {
        privatesData: { privates },
      } = defaultProps;
      const component = shallow(<BeforeTurn {...defaultProps} />);

      expect(component.find(Private)).toHaveLength(2);
      expect(
        component
          .find(Private)
          .at(0)
          .props(),
      ).toMatchObject(privates[0]);
      expect(
        component
          .find(Private)
          .at(1)
          .props(),
      ).toMatchObject(privates[1]);
    });

    describe('treasury', () => {
      it('should render data', () => {
        const { treasury } = defaultProps;
        const component = shallow(<BeforeTurn {...defaultProps} />);
        expect(component.find(Treasury)).toHaveLength(1);
        expect(
          component
            .find(Treasury)
            .first()
            .props(),
        ).toMatchObject({ treasury });
      });
    });
  });
});
