import React from 'react';
import PropTYpes from 'prop-types';
import EditableInput from '../../components/general/EditableInput';

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
  <div>
    <EditableInput
      canEdit={canEditName}
      onToggle={onToggleName}
      onChange={onChangeName}
      value={trainName}
    />
    <EditableInput
      canEdit={canEditRevenue}
      onToggle={onToggleRevenue}
      onChange={onChangeRevenue}
      value={totalRevenue}
    />

    {console.log(`trainId: ${trainId}`)}
  </div>
);

export default Train;

Train.propTypes = {
  trainId: PropTYpes.string,
};
