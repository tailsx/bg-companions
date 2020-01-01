import React from 'react';
import PropTypes from 'prop-types';
import Train from 'components/Train';

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

Trains.propTypes = {};
