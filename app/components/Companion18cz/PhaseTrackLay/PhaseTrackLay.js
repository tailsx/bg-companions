import React from 'react';
import PropTypes from 'prop-types';

import Train from '../Train';

const PhaseTrackLay = ({ trains }) => (
  <div>{trains && trains.map(({ ...trainProps }) => <Train key="train" {...trainProps} />)}</div>
);

export default PhaseTrackLay;

PhaseTrackLay.propTypes = {
  trains: PropTypes.array,
};
