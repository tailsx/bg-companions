import React from 'react';
import PropTYpes from 'prop-types';
import EditableInput from '../../components/general/EditableInput';

const Train = ({ trainId, trainName, canEditName, onToggleName, onChangeName }) => (
  <div>
    <EditableInput
      canEdit={canEditName}
      onToggle={onToggleName}
      onChange={onChangeName}
      value={trainName}
    />

    {console.log(`trainId: ${trainId}`)}
  </div>
);

export default Train;

Train.propTypes = {
  trainId: PropTYpes.string,
};
