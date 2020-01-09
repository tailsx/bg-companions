import React from 'react';
import PropTypes from 'prop-types';
import GenericButton from 'components/general/Button/GenericButton';

import './style.scss';

const VIEWABLE_OPTIONS = 1;

const Selectable = ({ onValueChange, onButtonClick, options, buttonText }) => (
  <div className="selectable">
    <select className="selectable__dropdown" size={VIEWABLE_OPTIONS} onChange={onValueChange}>
      {options.map(item => (
        <option key={`select-${item}`} value={item}>
          {item}
        </option>
      ))}
    </select>
    <GenericButton className="selectable__button" onClick={onButtonClick} buttonText={buttonText} />
  </div>
);

export default Selectable;

Selectable.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  buttonText: PropTypes.string.isRequired,
};
