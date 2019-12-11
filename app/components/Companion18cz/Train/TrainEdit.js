import React from 'react';
import PropTypes from 'prop-types';

const TrainEdit = ({ name, type, lastRan, onNameChange, onTypeChange, onNumberChange }) => (
  <div>
    <input className="train-name" type="text" value={name} onChange={onNameChange} />
    <input className="train-type" type="text" value={type} onChange={onTypeChange} />
    <input className="train-lastRan" type="number" value={lastRan} onChange={onNumberChange} />
  </div>
);

export default TrainEdit;

TrainEdit.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  lastRan: PropTypes.number,
  onNameChange: PropTypes.func,
  onTypeChange: PropTypes.func,
  onNumberChange: PropTypes.func,
};
