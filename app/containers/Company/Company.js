import React from 'react';

const Company = ({ id, isFloated, onFloatCompany, onChangeSharePrice }) => {
  console.log(`render ${id}`);
  return (
    <div>
      {`Company: ${id}`}
      <input type="number" onChange={evt => onChangeSharePrice(id, evt.target.value)} />
      {!isFloated && (
        <button type="button" onClick={() => onFloatCompany(id)}>
          float Company
        </button>
      )}
      <div>Childen stuff</div>
    </div>
  );
};

export default Company;
