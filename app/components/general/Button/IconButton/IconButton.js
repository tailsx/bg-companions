import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ className, iconClass, onClick }) => (
  <button className={className} type="button" onClick={onClick}>
    <i className={iconClass} />
  </button>
);

export default IconButton;

IconButton.propTypes = {
  iconClass: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
