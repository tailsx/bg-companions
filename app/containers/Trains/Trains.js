import React from 'react';
import PropTypes from 'prop-types';
import Train from 'containers/Train';

const Trains = ({ trainIds, onCreateTrain }) => {
  return (
    <div>
      {console.log('fwfwef')}
      <button type="button" onClick={onCreateTrain}>
        Create Train
      </button>
      {trainIds.map(trainId => (
        <Train key={trainId} />
      ))}
    </div>
  );
};

export default Trains;

Trains.propTypes = {
  trainIds: PropTypes.array.isRequired,
  onCreateTrain: PropTypes.func,
};
