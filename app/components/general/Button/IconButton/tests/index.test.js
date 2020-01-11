import React from 'react';
import { shallow, render } from 'enzyme';

import IconButton from '../index';

const DEFAULT_ICON_CLASS = 'icon-ok';
const DEFAULT_CLASSNAME = 'rand-class';

const setup = propsOverride => {
  const props = {
    iconClass: DEFAULT_ICON_CLASS,
    className: DEFAULT_CLASSNAME,
    ...propsOverride,
  };
  const component = shallow(<IconButton {...props} />);

  return { props, component };
};

describe('<IconButton />', () => {
  it('should render button with icon', () => {
    const { props } = setup();
    const component = render(<IconButton {...props} />);

    expect(component.hasClass(DEFAULT_ICON_CLASS));
  });
});
