import React from 'react';
import PropTYpes from 'prop-types';
import EditableInput from '../../components/general/EditableInput';

import './style.scss';

const Train = ({
  trainId,
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
    <div className="train__field">
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
  trainId: PropTYpes.string,
};
