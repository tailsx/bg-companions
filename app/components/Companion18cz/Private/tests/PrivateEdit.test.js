import React from 'react';
import { shallow } from 'enzyme';

import Edit from '../PrivateEdit';

describe('<PrivateEdit>', () => {
  it('should render edit fields', () => {
    const priv = {
      id: 'private1',
      hasAbility: true,
      marketValue: 100,
      revenue: 30,
    };
    const component = shallow(<Edit {...priv} />);

    expect(component.find('.private-revenue').props().value).toBe(priv.revenue);
    expect(component.find('.private-marketValue').props().value).toBe(priv.marketValue);
  });
});
