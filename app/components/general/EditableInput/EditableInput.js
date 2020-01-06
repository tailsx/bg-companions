import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import IconButton from '../Button/IconButton';

const EditableInput = ({ label, canEdit, onButtonClick, value, onChange, inputType = 'text' }) => (
  <div className="editable">
    <label className="editable__wrapper">
      <div className={`editable__label${label ? '' : ' editable__label--hidden'}`}>{label}</div>
      <div className="editable__form">
        {canEdit ? (
          <input className="editable__field" type={inputType} onChange={onChange} value={value} />
        ) : (
          <span className="editable__text">{value}</span>
        )}
        <IconButton
          className="editable__button"
          iconClass={canEdit ? 'icon-ok' : 'icon-pencil'}
          onClick={onButtonClick}
        />
      </div>
    </label>
  </div>
);

export default EditableInput;

EditableInput.propTypes = {
  canEdit: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  inputType: PropTypes.oneOf(['text', 'number']),
  label: PropTypes.string,
};
