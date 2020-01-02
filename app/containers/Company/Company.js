import React from 'react';
import PropTypes from 'prop-types';

import SharePrice from 'components/Company/SharePrice';
import CompanyAssets from 'components/Company/CompanyAssets';
import EditableInput from 'components/general/EditableInput';
import './style.scss';

const Company = ({
  companyId,
  companyName,
  isFloated,
  onFloatCompany,
  onChangeInitPrice,
  initSharePrice,
  canEditName,
  onToggleName,
  onChangeName,
  trainIds,
}) => (
  <div className="company">
    <EditableInput
      canEdit={canEditName}
      onButtonClick={onToggleName}
      onChange={onChangeName}
      value={companyName}
    />
    {!isFloated && (
      <SharePrice
        onButtonClick={onFloatCompany}
        value={initSharePrice}
        onValueChange={onChangeInitPrice}
      />
    )}
    {isFloated && <CompanyAssets companyId={companyId} trainIds={trainIds} />}
  </div>
);

export default Company;

Company.propTypes = {
  isFloated: PropTypes.bool,

  canEditName: PropTypes.bool,
  onToggleName: PropTypes.func,
  onChangeName: PropTypes.func,
  companyName: PropTypes.string,

  initSharePrice: PropTypes.string,
  onChangeInitPrice: PropTypes.func,
  onFloatCompany: PropTypes.func,

  companyId: PropTypes.string,
  trainIds: PropTypes.array.isRequired,
};
