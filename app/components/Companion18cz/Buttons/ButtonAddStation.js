import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../general/Button';

const ButtonAddStation = ({ text, ...rest }) => {
  return <Button className="button-station" text={text || 'Add Station'} {...rest} />;
};

export default ButtonAddStation;

ButtonAddStation.propTypes = {
  text: PropTypes.string,
  onButtonClick: PropTypes.func,
};
