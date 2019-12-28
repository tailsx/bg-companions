import React from 'react';

const Company = ({ id, colour, onFloatCompany, onChangeFloatValue }) => (
  <div>
    {`Company: ${id}, Color: ${colour}`}
    <input type="number" onChange={onChangeFloatValue} />
    <button onClick={onFloatCompany}>float Company</button>
    <div>Childen stuff</div>
  </div>
);

export default Company;
