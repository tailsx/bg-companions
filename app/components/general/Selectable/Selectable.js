import React from 'react';
import PropTypes from 'prop-types';

const VIEWABLE_OPTIONS = 1;

const Selectable = ({ onValueChange, onButtonClick, options, buttonText }) => (
  <div>
    <select size={VIEWABLE_OPTIONS} onChange={onValueChange}>
      {options.map(item => (
        <option key={`select-${item}`} value={item}>
          {item}
        </option>
      ))}
    </select>
    <button type="button" onClick={onButtonClick}>
      {buttonText}
    </button>
  </div>
);

export default Selectable;

Selectable.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  buttonText: PropTypes.string.isRequired,
};
