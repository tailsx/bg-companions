import React from 'react';
import PropTypes from 'prop-types';

import AddStationItem from './AddStationItem';

class PhaseAddStation extends React.PureComponent {
  constructor(props) {
    super(props);
    const { stations } = props;
    this.initAmount = stations ? stations.length : 0;
  }

  render() {
    const { stations, turnStations, onChangeStation } = this.props;

    return (
      <div>
        <h1>Add Stations</h1>
        {stations &&
          stations.map(station => (
            <AddStationItem
              key={`add-${station.id}`}
              amount={turnStations[station.id].amount}
              onStationChange={onChangeStation}
              {...{ station }}
            />
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
  turnStations: PropTypes.object,
  onChangeStation: PropTypes.func,
};
