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
  treasury,
  listSharePrices,
}) => (
  <div className="company">
    <div>
      <EditableInput
        canEdit={canEditName}
        onButtonClick={onToggleName}
        onChange={onChangeName}
        value={companyName}
      />
    </div>
    {!isFloated && (
      <SharePrice
        onButtonClick={onFloatCompany}
        value={initSharePrice}
        onValueChange={onChangeInitPrice}
        listSharePrices={listSharePrices}
      />
    )}
    {isFloated && <CompanyAssets companyId={companyId} trainIds={trainIds} treasury={treasury} />}
  </div>
);

export default Company;

Company.propTypes = {
  isFloated: PropTypes.bool,

  canEditName: PropTypes.bool,
  onToggleName: PropTypes.func,
  onChangeName: PropTypes.func,
  companyName: PropTypes.string,

  initSharePrice: PropTypes.number,
  onChangeInitPrice: PropTypes.func,
  onFloatCompany: PropTypes.func,

  companyId: PropTypes.string,
  trainIds: PropTypes.array.isRequired,

  treasury: PropTypes.number,

  listSharePrices: PropTypes.arrayOf(PropTypes.number),
};
