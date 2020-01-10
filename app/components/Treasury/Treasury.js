import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Treasury = ({ treasury }) => (
  <div className="treasury">
    <span
      className={`treasury__text ${
        treasury >= 0 ? 'treasury__text--profit' : 'treasury__text--deficit'
      }`}
    >
      {`$ ${treasury}`}
    </span>
  </div>
);

export default Treasury;

Treasury.propTypes = {
  treasury: PropTypes.number.isRequired,
};
