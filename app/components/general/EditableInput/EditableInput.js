import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import IconButton from '../Button/IconButton';

const EditableInput = ({ canEdit, onButtonClick, value, onChange, inputType = 'text' }) => (
  <div className="input">
    {canEdit ? (
      <input className="input__field" type={inputType} onChange={onChange} value={value} />
    ) : (
      <span className="input__text">{value}</span>
    )}
    <IconButton
      className="input__button"
      iconClass={canEdit ? 'icon-ok' : 'icon-pencil'}
      onClick={onButtonClick}
    />
  </div>
);

export default EditableInput;

EditableInput.propTypes = {
  canEdit: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  inputType: PropTypes.oneOf(['text', 'number']),
};
