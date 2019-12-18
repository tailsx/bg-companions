import React from 'react';
import PropTypes from 'prop-types';

import Station from '../Station';
import NewStation from './NewStation';

class PhaseAddStation extends React.PureComponent {
  constructor(props) {
    super(props);
    const { stations } = props;
    this.initAmount = stations ? stations.length : 0;
  }

  render() {
    const { stations, onChangeStation } = this.props;
    return (
      <div>
        <h1>Add Stations</h1>
        {stations &&
          stations.map(station => (
            <div className="station" key={`station-${station.id}`}>
              <Station {...station} />
              <NewStation init={this.initAmount} onAmountChange={onChangeStation} />
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
