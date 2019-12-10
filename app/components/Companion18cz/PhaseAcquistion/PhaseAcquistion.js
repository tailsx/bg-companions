import React from 'react';
import PropTypes from 'prop-types';

class PhaseAcquistion extends React.PureComponent {
  render() {
    const { treasury } = this.props;

    return (
      <div>
        <h1>Acquistion</h1>
        {treasury && <div className="treasury">{treasury}</div>}
      </div>
    );
  }
}

export default PhaseAcquistion;

PhaseAcquistion.propTypes = {
  treasury: PropTypes.number,
};
