import React from 'react';
import PropTypes from 'prop-types';
import ExistingStation from './ExistingStation';
import NewStation from './NewStation';

class PhaseAddStation extends React.PureComponent {
  render() {
    const { stations, onChangeStation } = this.props;
    return (
      <div>
        <h1>Add Stations</h1>
        {stations &&
          stations.map(station => (
            <div className="station" key={`station-${station.id}`}>
              <ExistingStation {...station} />
              <NewStation {...station} onAmountChange={onChangeStation} />
            </div>
          ))}
      </div>
    );
  }
}

export default PhaseAddStation;

PhaseAddStation.propTypes = {
  stations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ),
  onChangeStation: PropTypes.func,
};
