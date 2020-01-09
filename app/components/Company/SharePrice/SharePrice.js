import React from 'react';
import PropTypes from 'prop-types';

import Selectable from '../../general/Selectable/Selectable';

import './style.scss';

const SharePrice = ({ onValueChange, onButtonClick, listSharePrices }) => (
  <div className="share-price">
    <div className="share-price__wrapper">
      <div className="share-price__wrapper-item">Initial Share Price</div>
      <div className="share-price__wrapper-item">
        <Selectable
          onButtonClick={onButtonClick}
          onValueChange={onValueChange}
          buttonText="Set price"
          options={listSharePrices}
        />
      </div>
    </div>
  </div>
);

export default SharePrice;

SharePrice.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  listSharePrices: PropTypes.arrayOf(PropTypes.number),
};
