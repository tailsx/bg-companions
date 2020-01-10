import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const GenericButton = ({ buttonText, className, ...rest }) => (
  <button type="button" className={`btn${` ${className}` || ''}`} {...rest}>
    {buttonText}
  </button>
);

export default GenericButton;

GenericButton.propTypes = {
  buttonText: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
