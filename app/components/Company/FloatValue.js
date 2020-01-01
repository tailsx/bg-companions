import React from 'react';
import PropTypes from 'prop-types';

const FloatValue = ({ value = '0', onValueChange, onButtonClick }) => (
  <div>
    <input type="number" value={value} onChange={onValueChange} />
    <button type="button" onClick={onButtonClick}>
      Initial Float
    </button>
  </div>
);

export default FloatValue;

FloatValue.propTypes = {
  value: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
};
