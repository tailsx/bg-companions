import React from 'react';
import { shallow } from 'enzyme';

import ReadOnly from '../PrivateReadOnly';

describe('<PrivateReadOnly>', () => {
  it('should render privates data', () => {
    const props = {
      id: 'private1',
      hasAbility: true,
      marketValue: 100,
      revenue: 30,
    };
    const component = shallow(<ReadOnly {...props} />);

    expect(component.find('.private-revenue').text()).toEqual(props.revenue);
    expect(component.find('.private-marketValue').text()).toEqual(props.marketValue.toString());
  });
});
