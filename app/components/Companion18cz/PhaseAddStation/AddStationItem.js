import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/general/Input';

import Station from '../Station';

const AddStationItem = ({ station, value, onStationChange }) => (
  <div className="station" key={`station-${station.id}`}>
    <Station {...station} />
    <Input
      label="New Stations"
      value={value}
      onChange={evt => onStationChange(station.id, parseInt(evt.target.value, 10))}
    />
  </div>
);

export default AddStationItem;
AddStationItem.propTypes = {
  station: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }),
  onStationChange: PropTypes.func,
  value: PropTypes.number,
};
