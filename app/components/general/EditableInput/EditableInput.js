import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import IconButton from '../Button/IconButton';

const EditableInput = ({ canEdit, onButtonClick, value, onChange, inputType = 'text' }) => (
  <div className="input-wrapper">
    <div className="input">
      {canEdit ? (
        <input className="input-text" type={inputType} onChange={onChange} value={value} />
      ) : (
        <span className="input-text readonly">{value}</span>
      )}
      <IconButton iconClass={canEdit ? 'icon-ok' : 'icon-pencil'} onClick={onButtonClick} />
    </div>
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
