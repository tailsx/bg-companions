import React from 'react';
import PropTypes from 'prop-types';
import StationReadOnly from '../Station/StationReadOnly';

const ExistingStation = station => (
  <div>
    <StationReadOnly className="station-data" {...station} />
  </div>
);

export default ExistingStation;

ExistingStation.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
