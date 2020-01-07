import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const GenericButton = ({ buttonText, ...rest }) => (
  <button type="button" className="btn" {...rest}>
    {buttonText}
  </button>
);

export default GenericButton;

GenericButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
