import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import IconButton from '../Button/IconButton';

const EditableInput = ({ canEdit, onToggle, value, onChange }) => (
  <div className="input-wrapper">
    <div className="input">
      {canEdit ? (
        <input className="input-text" type="text" onChange={onChange} value={value} />
      ) : (
        <span className="input-text readonly">{value}</span>
      )}
      <IconButton iconClass={canEdit ? 'icon-ok' : 'icon-pencil'} onClick={onToggle} />
    </div>
  </div>
);

export default EditableInput;

EditableInput.propTypes = {
  canEdit: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};
