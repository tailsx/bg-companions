import React from 'react';

const Company = ({ id, colour, onFloatCompany, onChangeFloatValue, yo }) => (
  <div>
    {`Company: ${id}, Color: ${colour}`}
    <input type="number" onChange={onChangeFloatValue} />
    <button onClick={onFloatCompany}>float Company</button>
    <div>Childen stuff</div>
    {yo.length}
  </div>
);

export default Company;
