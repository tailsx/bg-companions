import React from 'react';
import PropTypes from 'prop-types';
import Train from 'containers/Train';

import './style.scss';

const Trains = ({ trainIds, onCreateTrain, allTrainsRevenue }) => {
  return (
    <div>
      <button type="button" onClick={onCreateTrain}>
        Create Train
      </button>
      {`Total income: ${allTrainsRevenue}`}
      {trainIds.map(trainId => (
        <Train key={trainId} trainId={trainId} />
      ))}
    </div>
  );
};

export default Trains;

Trains.propTypes = {
  trainIds: PropTypes.array.isRequired,
  onCreateTrain: PropTypes.func,
  allTrainsRevenue: PropTypes.number,
};
