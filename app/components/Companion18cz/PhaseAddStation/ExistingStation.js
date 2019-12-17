import React from 'react';
import PropTypes from 'prop-types';

const ExistingStation = ({ id, type, amount }) => (
  <div>
    place existing stations
    {id}
    {type}
    {amount}
  </div>
);

export default ExistingStation;

ExistingStation.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
