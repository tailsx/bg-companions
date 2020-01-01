import React from 'react';
import PropTypes from 'prop-types';
import FloatValue from 'components/Company/FloatValue';
import CompanyAssets from 'components/Company/CompanyAssets';
import CompanyName from '../../components/Company/CompanyName';

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
}) => (
  <div>
    <CompanyName
      canEdit={canEditName}
      onToggle={onToggleName}
      onChange={onChangeName}
      value={companyName}
    />
    {!isFloated && (
      <FloatValue
        onButtonClick={onFloatCompany}
        value={initSharePrice}
        onValueChange={onChangeInitPrice}
      />
    )}
    {isFloated && <CompanyAssets companyId={companyId} />}
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
};
