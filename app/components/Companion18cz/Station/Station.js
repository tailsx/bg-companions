import React from 'react';
import PropTypes from 'prop-types';

const Station = ({ type, amount }) => (
  <div>
    <span className="station-type">{type}</span>
    <span className="station-amount">{amount}</span>
  </div>
);

export default Station;

Station.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
};
