import React from 'react';
import PropTypes from 'prop-types';
import FloatValue from 'components/Company/FloatValue';
import CompanyAssets from 'components/Company/CompanyAssets';
import CompanyName from '../../components/Company/CompanyName';

const Company = ({
  companyName,
  isFloated,
  onFloatCompany,
  onChangeInitPrice,
  initSharePrice,
  trainIds,
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
    {isFloated && <CompanyAssets {...{ trainIds }} />}
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

  trainIds: PropTypes.array,
  companyId: PropTypes.string,
};
