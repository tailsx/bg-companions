import React from 'react';
import PropTypes from 'prop-types';

class PhaseTrainPurchase extends React.PureComponent {
  render() {
    const { trains } = this.props;

    return (
      <div>
        {trains &&
          trains.map(({ id, type, name, lastRan }) => (
            <div key={`train-${id}`} className="train">
              <span>{type}</span>
              <span>{name}</span>
              <span>{lastRan}</span>
            </div>
          ))}
      </div>
    );
  }
}

export default PhaseTrainPurchase;

PhaseTrainPurchase.propTypes = {
  trains: PropTypes.array,
};
