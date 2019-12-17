import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../general/Button';

const ButtonAddPrivate = ({ text, ...rest }) => {
  return <Button className="button-private" text={text || 'Add Private'} {...rest} />;
};

export default ButtonAddPrivate;

ButtonAddPrivate.propTypes = {
  text: PropTypes.string,
  onButtonClick: PropTypes.func,
};
