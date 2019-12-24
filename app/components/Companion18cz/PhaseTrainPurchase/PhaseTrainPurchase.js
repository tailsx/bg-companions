import React from 'react';
import PropTypes from 'prop-types';

import TrainPurchaseItem from './TrainPurchaseItem';

import './style.scss';

class PhaseTrainPurchase extends React.PureComponent {
  render() {
    const { trains, turnTrains, onTurnTrains } = this.props;

    return (
      <div className="phase-train-purchase">
        <h1>Purchase Trains</h1>
        <div className="phase-item-wrapper">
          {trains &&
            trains.map(train => (
              <TrainPurchaseItem
                key={`train-${train.id}`}
                value={turnTrains[train.id].amount}
                onTurnTrains={onTurnTrains}
                train={train}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default PhaseTrainPurchase;

PhaseTrainPurchase.propTypes = {
  trains: PropTypes.array,
  turnTrains: PropTypes.object,
  onTurnTrains: PropTypes.func,
};
