import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ button = 'button', iconClass, onClick }) => (
  <button type={button} onClick={onClick}>
    <i className={iconClass} />
  </button>
);

export default IconButton;

IconButton.propTypes = {
  button: PropTypes.oneOf(['button', 'number']),
  iconClass: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
