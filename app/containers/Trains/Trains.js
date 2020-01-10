import React from 'react';
import PropTypes from 'prop-types';

import Train from 'containers/Train';
import GenericButton from 'components/general/Button/GenericButton';

import './style.scss';

const Trains = ({ trainIds, onCreateTrain, allTrainsRevenue }) => (
  <div className="trains">
    <div className="trains__section ">
      <div className="trains__title">Trains</div>
      <div className="trains__text">{`Total income: ${allTrainsRevenue}`}</div>
    </div>
    <div className="trains__section">
      <div className="trains__fleet">
        {trainIds.map(trainId => (
          <Train className="trains__train" key={trainId} trainId={trainId} />
        ))}
      </div>
      <GenericButton className="trains__button" onClick={onCreateTrain} buttonText="Create Train" />
    </div>
  </div>
);

export default Trains;

Trains.propTypes = {
  trainIds: PropTypes.array.isRequired,
  onCreateTrain: PropTypes.func,
  allTrainsRevenue: PropTypes.number,
};
