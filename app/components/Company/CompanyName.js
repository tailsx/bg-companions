import React from 'react';
import PropTypes from 'prop-types';

const CompanyName = ({ canEdit, onToggle, value, onChange }) => (
  <div>
    {canEdit && (
      <div>
        <input type="text" onChange={onChange} value={value} />
        <button type="button" onClick={onToggle}>
          Done Edit
        </button>
      </div>
    )}
    {!canEdit && (
      <div>
        {`${value}`}
        <button type="button" onClick={onToggle}>
          Edit Name
        </button>
      </div>
    )}
  </div>
);

export default CompanyName;

CompanyName.propTypes = {
  canEdit: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};
