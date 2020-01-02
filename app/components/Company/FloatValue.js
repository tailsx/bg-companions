import React from 'react';
import PropTypes from 'prop-types';
import EditableInput from '../general/EditableInput/EditableInput';

const FloatValue = ({ value = '0', onValueChange, onButtonClick }) => (
  <div>
    <EditableInput canEdit onButtonClick={onButtonClick} onChange={onValueChange} value={value} />
  </div>
);

export default FloatValue;

FloatValue.propTypes = {
  value: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
};
