import React from 'react';
import PropTypes from 'prop-types';

class PhaseAddStation extends React.PureComponent {
  render() {
    const { stations } = this.props;

    return (
      <div>
        <h1>Add Stations</h1>
        {stations &&
          stations.map(({ id, type, amount }) => (
            <div key={`${id}`} className="station">
              <span>{type}</span>
              <span>{amount}</span>
            </div>
          ))}
      </div>
    );
  }
}

export default PhaseAddStation;

PhaseAddStation.propTypes = {
  stations: PropTypes.array,
};
