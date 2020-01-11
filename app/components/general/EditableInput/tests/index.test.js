import React from 'react';
import { shallow } from 'enzyme';

import EditableInput from '../index';

const DEFAULT_CAN_EDIT = true;
const DEFAULT_VALUE = 'default value';
const DEFAULT_INPUT_TYPE = 'text';
const DEFAULT_LABEL = 'default label';

const setup = propsOverride => {
  const props = {
    canEdit: DEFAULT_CAN_EDIT,
    value: DEFAULT_VALUE,
    inputType: DEFAULT_INPUT_TYPE,
    label: DEFAULT_LABEL,
    ...propsOverride,
  };
  const component = shallow(<EditableInput {...props} />);

  return { props, component };
};

describe('<EditableInput />', () => {
  it('should have input nested inside label for accessibility', () => {
    const { component } = setup();

    expect(component.first('label').contains('input')).toBeTruthy();
  });

  it('should have label hidden class if no label text provided', () => {
    const { component } = setup({ label: undefined });

    expect(component.prop('label')).not.toEqual(DEFAULT_LABEL);
    expect(component.contains('.editable__label--hidden')).toBeTruthy();
  });
});
