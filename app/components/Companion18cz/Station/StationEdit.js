import React from 'react';
import PropTypes from 'prop-types';

const StationEdit = ({ type, amount, onTypeChange, onAmountChange }) => (
  <div>
    <input className="station-type" type="text" value={type} onChange={onTypeChange} />
    <input className="station-amount" type="number" value={amount} onChange={onAmountChange} />
  </div>
);

export default StationEdit;

StationEdit.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  onTypeChange: PropTypes.func,
  onAmountChange: PropTypes.func,
};
