import React from 'react';
import PropTypes from 'prop-types';

import Train from '../Train';

const TurnTrackLay = ({ trains }) => (
  <div>{trains && trains.map(({ ...trainProps }) => <Train key="train" {...trainProps} />)}</div>
);

export default TurnTrackLay;

TurnTrackLay.propTypes = {
  trains: PropTypes.array,
};
