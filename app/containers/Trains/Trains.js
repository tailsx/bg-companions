import React from 'react';
import PropTypes from 'prop-types';
import Train from 'containers/Train';

const Trains = ({ trains, onCreateTrain }) => {
  return (
    <div>
      <button type="button" onClick={onCreateTrain}>
        Create Train
      </button>
      {trains.map(train => (
        <Train key={train.trainId} {...train} />
      ))}
      {'filtered'}
    </div>
  );
};

export default Trains;

Trains.propTypes = {
  trains: PropTypes.array,
  onCreateTrain: PropTypes.func,
};
