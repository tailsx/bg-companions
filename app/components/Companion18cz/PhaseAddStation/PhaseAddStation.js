import React from 'react';
import PropTypes from 'prop-types';
import StationReadOnly from '../Station/StationReadOnly';

class PhaseAddStation extends React.PureComponent {
  render() {
    const { stations } = this.props;

    return (
      <div>
        <h1>Add Stations</h1>
        <div>
          <h3>Existing Stations</h3>
          {stations &&
            stations.map(({ id, ...station }) => <StationReadOnly key={`${id}`} {...station} />)}
        </div>
        <div>
          <h3>New Stations</h3>
        </div>
      </div>
    );
  }
}

export default PhaseAddStation;

PhaseAddStation.propTypes = {
  stations: PropTypes.array,
};
