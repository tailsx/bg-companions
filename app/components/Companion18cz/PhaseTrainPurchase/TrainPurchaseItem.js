import React from 'react';
import PropTypes from 'prop-types';

import Train from 'components/Companion18cz/Train';
import Input from 'components/general/Input';

const TrainPurchaseItem = ({ train, value, onTurnTrains }) => (
  <div className="phase-item">
    <Train {...train} />
    <Input
      label="fwe"
      value={value}
      onChange={evt => onTurnTrains(train.id, parseInt(evt.target.value, 10))}
    />
  </div>
);

export default TrainPurchaseItem;

TrainPurchaseItem.propTypes = {
  train: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    lastRan: PropTypes.number,
  }),
  onTurnTrains: PropTypes.func,
  value: PropTypes.number,
};
