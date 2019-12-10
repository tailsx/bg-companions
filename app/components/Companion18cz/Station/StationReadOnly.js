import React from 'react';
import PropTypes from 'prop-types';

const StationReadOnly = ({ type, amount }) => (
  <div>
    <span className="station-type">{type}</span>
    <span className="station-amount">{amount}</span>
  </div>
);

export default StationReadOnly;

StationReadOnly.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
};
