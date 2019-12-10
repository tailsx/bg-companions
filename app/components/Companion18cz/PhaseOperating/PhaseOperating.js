import React from 'react';
import PropTypes from 'prop-types';

class PhaseOperating extends React.PureComponent {
  render() {
    const { trains } = this.props;

    return (
      <div className="phase-operating">
        <h1>Operating</h1>
        {trains &&
          trains.map(({ id, name, type, lastRan }) => (
            <div key={`phase-operating-${id}`} className="train">
              <span>{name}</span>
              <span>{type}</span>
              <span>{lastRan}</span>
            </div>
          ))}
      </div>
    );
  }
}

export default PhaseOperating;

PhaseOperating.propTypes = {
  trains: PropTypes.array,
};
