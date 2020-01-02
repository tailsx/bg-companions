import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const TrainComponent = ({ className, children }) => (
  <div className={`train-component ${className}`}>{children}</div>
);

export default TrainComponent;

TrainComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
