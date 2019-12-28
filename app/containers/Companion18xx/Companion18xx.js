import React from 'react';
import PropTypes from 'prop-types';

import Company from 'containers/Company';

export default class Companion18xx extends React.PureComponent {
  render() {
    const { onCreateCompany, companies } = this.props;
    return (
      <div>
        <h1>18XX Companions</h1>
        <button type="button" onClick={onCreateCompany}>
          add company
        </button>
        {companies &&
          companies.map(company => <Company key={`company-${company.id}`} {...company} />)}
      </div>
    );
  }
}

Companion18xx.propTypes = {
  onCreateCompany: PropTypes.func,
  companies: PropTypes.array,
};
