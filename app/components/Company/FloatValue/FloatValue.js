import React from 'react';
import PropTypes from 'prop-types';
import EditableInput from '../../general/EditableInput/EditableInput';
import './style.scss';

const FloatValue = ({ value = '0', onValueChange, onButtonClick }) => (
  <div className="float-value-wrapper">
    <label>
      <span className="label-text">Share Price</span>
      <EditableInput canEdit onButtonClick={onButtonClick} onChange={onValueChange} value={value} />
    </label>
  </div>
);

export default FloatValue;

FloatValue.propTypes = {
  value: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
};
