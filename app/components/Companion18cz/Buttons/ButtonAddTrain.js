import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../general/Button';

const ButtonAddTrain = ({ text, ...rest }) => (
  <Button className="button-station" text={text || 'Add Train'} {...rest} />
);

export default ButtonAddTrain;

ButtonAddTrain.propTypes = {
  text: PropTypes.string,
  onButtonClick: PropTypes.func,
};
