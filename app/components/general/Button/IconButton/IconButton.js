import React from 'react';
import PropTypes from 'prop-types';
import GenericButton from '../GenericButton/GenericButton';

const IconButton = ({ className, iconClass, onClick }) => (
  <GenericButton
    className={className}
    type="button"
    onClick={onClick}
    buttonText={<i className={iconClass} />}
  />
);

export default IconButton;

IconButton.propTypes = {
  iconClass: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
