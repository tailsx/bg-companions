import React from 'react';
import PropTypes from 'prop-types';
import Train from 'components/Train';

const Trains = ({ trains, filtered, onCreateTrain }) => {
  return (
    <div>
      <button type="button" onClick={onCreateTrain}>
        Create Train
      </button>
      {trains.map(train => (
        <Train key={train.trainId} {...train} />
      ))}
      {'filtered'}
      {filtered.map(fil => (
        <Train key={fil.trainId} {...fil} />
      ))}
    </div>
  );
};

export default Trains;

Trains.propTypes = {};
