import React from 'react';
import PropTypes from 'prop-types';
import EditableInput from '../../components/general/EditableInput';

import './style.scss';

const Train = ({
  trainName,
  canEditName,
  onToggleName,
  onChangeName,
  canEditRevenue,
  onToggleRevenue,
  onChangeRevenue,
  totalRevenue,
}) => (
  <div className="train">
    <div className="train__field train__field--name">
      <EditableInput
        canEdit={canEditName}
        onButtonClick={onToggleName}
        onChange={onChangeName}
        value={trainName}
      />
    </div>
    <div className="train__field">
      <EditableInput
        canEdit={canEditRevenue}
        onButtonClick={onToggleRevenue}
        onChange={onChangeRevenue}
        value={totalRevenue}
        label="Revenue"
      />
    </div>
  </div>
);

export default Train;

Train.propTypes = {
  trainName: PropTypes.string,
  canEditName: PropTypes.bool,
  onToggleName: PropTypes.func,
  onChangeName: PropTypes.func,

  canEditRevenue: PropTypes.bool,
  onToggleRevenue: PropTypes.func,
  onChangeRevenue: PropTypes.func,
  totalRevenue: PropTypes.number,
};
