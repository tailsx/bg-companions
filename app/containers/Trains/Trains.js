import React from 'react';
import PropTypes from 'prop-types';
import Train from 'containers/Train';

import './style.scss';

const Trains = ({ trainIds, onCreateTrain, allTrainsRevenue }) => (
  <div className="trains">
    <div className="trains__text">{`Total income: ${allTrainsRevenue}`}</div>
    <div>
      <button type="button" onClick={onCreateTrain}>
        Create Train
      </button>
    </div>
    <div className="trains__fleet">
      {trainIds.map(trainId => (
        <Train key={trainId} trainId={trainId} />
      ))}
    </div>
  </div>
);

export default Trains;

Trains.propTypes = {
  trainIds: PropTypes.array.isRequired,
  onCreateTrain: PropTypes.func,
  allTrainsRevenue: PropTypes.number,
};
