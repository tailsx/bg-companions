import React from 'react';
import PropTypes from 'prop-types';
import FloatValue from 'components/Company/FloatValue';
import CompanyAssets from 'components/Company/CompanyAssets';

const Company = ({
  companyId,
  companyName,
  onNameChange,
  isFloated,
  onFloatCompany,
  onChangeInitPrice,
  initSharePrice,
  trainIds,
}) => (
  <div>
    {!isFloated && (
      <FloatValue
        onButtonClick={onFloatCompany}
        value={initSharePrice}
        onValueChange={onChangeInitPrice}
      />
    )}
    {isFloated && <CompanyAssets {...{ trainIds }} />}
    <input
      type="text"
      onChange={evt => onNameChange(companyId, evt.target.value)}
      value={companyName}
    />
  </div>
);

export default Company;

Company.propTypes = {
  companyId: PropTypes.string,
  trainIds: PropTypes.array,
};
