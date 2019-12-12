import React from 'react';
import PropTypes from 'prop-types';

const NewStation = ({ id, amount, onAmountChange }) => (
  <div>
    <input
      className={`station-add station-${id}`}
      type="number"
      value={amount}
      onChange={onAmountChange}
    />
  </div>
);

export default NewStation;

NewStation.propTypes = {
  id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func,
};
