import React from 'react';
import PropTypes from 'prop-types';

const AcquistionInfo = ({ stocks, price, onStockChange, onPriceChange }) => (
  <div>
    <input className="acquire-stocks" value={stocks} onChange={onStockChange} />
    <input className="acquire-price" value={price} onChange={onPriceChange} />
  </div>
);

export default AcquistionInfo;

AcquistionInfo.propTypes = {
  stocks: PropTypes.number,
  price: PropTypes.number,
  onStockChange: PropTypes.func,
  onPriceChange: PropTypes.func,
};
