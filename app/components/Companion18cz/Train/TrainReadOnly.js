import React from 'react';
import PropTypes from 'prop-types';

const TrainReadOnly = ({ name, type, lastRan }) => (
  <div>
    <span className="train-name">{name}</span>
    <span className="train-type">{type}</span>
    <span className="train-lastRan">{lastRan}</span>
  </div>
);

export default TrainReadOnly;

TrainReadOnly.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  lastRan: PropTypes.number,
};
