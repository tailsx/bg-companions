import React from 'react';
import { shallow } from 'enzyme';

import BeforeTurn from '../index';
import Private from '../../Private';
import Station from '../../Station';
import Train from '../../Train';
import Treasury from '../../Treasury';

const setup = propsOverrides => {
  const props = {
    privatesData: {
      privates: [
        { id: 'private1', revenue: 0, hasAbility: false, marketValue: 0 },
        { id: 'private2', revenue: 0, hasAbility: false, marketValue: 0 },
      ],
    },
    stationsData: {
      stations: [
        { id: 'station1', type: '$10', amount: 1 },
        { id: 'station2', type: '$100', amount: 1 },
      ],
    },
    trainsData: {
      trains: [
        { id: 'train1', type: 'train', name: 'test-train', lastRan: 100 },
        { id: 'train2', type: 'train', name: 'test-train', lastRan: 100 },
      ],
    },
    treasuryData: { treasury: 100 },
    ...propsOverrides,
  };

  const wrapper = shallow(<BeforeTurn {...props} />);

  return { props, wrapper };
};

describe('<BeforeTurn />', () => {
  it('should have a title', () => {
    const { wrapper } = setup();
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  describe('trains', () => {
    it('should have train components for each train', () => {
      const {
        props: {
          trainsData: { trains },
        },
        wrapper,
      } = setup();

      expect(wrapper.find(Train)).toHaveLength(2);
      expect(
        wrapper
          .find(Train)
          .at(0)
          .props(),
      ).toMatchObject(trains[0]);
      expect(
        wrapper
          .find(Train)
          .at(1)
          .props(),
      ).toMatchObject(trains[1]);
      expect(
        wrapper
          .find(Train)
          .at(0)
          .props().id,
      ).not.toBe(
        wrapper
          .find(Train)
          .at(1)
          .props().id,
      );
    });
  });

  describe('stations', () => {
    it('should render compoent data', () => {
      const {
        props: {
          stationsData: { stations },
        },
        wrapper,
      } = setup();

      expect(wrapper.find(Station)).toHaveLength(2);
      expect(
        wrapper
          .find(Station)
          .at(0)
          .props(),
      ).toMatchObject(stations[0]);
      expect(
        wrapper
          .find(Station)
          .at(1)
          .props(),
      ).toMatchObject(stations[1]);
      expect(
        wrapper
          .find(Station)
          .at(0)
          .props().id,
      ).not.toBe(
        wrapper
          .find(Station)
          .at(1)
          .props().id,
      );
    });
  });

  describe('privates', () => {
    it('should render compoent data', () => {
      const {
        props: {
          privatesData: { privates },
        },
        wrapper,
      } = setup();

      expect(wrapper.find(Private)).toHaveLength(2);
      expect(
        wrapper
          .find(Private)
          .at(0)
          .props(),
      ).toMatchObject(privates[0]);
      expect(
        wrapper
          .find(Private)
          .at(1)
          .props(),
      ).toMatchObject(privates[1]);
      expect(
        wrapper
          .find(Private)
          .at(0)
          .props().id,
      ).not.toBe(
        wrapper
          .find(Private)
          .at(1)
          .props().id,
      );
    });

    describe('treasury', () => {
      it('should render data', () => {
        const {
          props: {
            treasuryData: { treasury },
          },
          wrapper,
        } = setup();

        expect(wrapper.find(Treasury)).toHaveLength(1);
        expect(
          wrapper
            .find(Treasury)
            .first()
            .props(),
        ).toMatchObject({ treasury });
      });
    });
  });
});
