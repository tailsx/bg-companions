import React from 'react';
import { shallow } from 'enzyme';

import Treasury from '../Treasury';

describe('<Treasury>', () => {
  it('component should render', () => {
    const treasury = 100;
    const component = shallow(<Treasury treasury={treasury} />);

    expect(
      component
        .find('.treasury-amount')
        .first()
        .text(),
    ).toBe(treasury.toString());
  });
});
