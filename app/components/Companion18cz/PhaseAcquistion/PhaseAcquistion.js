import React from 'react';
import PropTypes from 'prop-types';
import AcquistionInfo from './AcquistionInfo';

class PhaseAcquistion extends React.PureComponent {
  render() {
    const { treasury } = this.props;

    return (
      <div>
        <h1>Acquistion</h1>
        {treasury && <div className="treasury">{treasury}</div>}
        {treasury && <AcquistionInfo {...this.props} />}
      </div>
    );
  }
}

export default PhaseAcquistion;

PhaseAcquistion.propTypes = {
  treasury: PropTypes.number,
  stocks: PropTypes.number,
  price: PropTypes.number,
  onStockChange: PropTypes.func,
  onPriceChange: PropTypes.func,
};
