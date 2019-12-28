import React from 'react';
import PropTypes from 'prop-types';
import Company from '../../components/Companion18xx/Company';

export default class Companion18xx extends React.PureComponent {
  render() {
    const { onFloatCompany, companies } = this.props;
    return (
      <div>
        <h1>18XX Companions</h1>
        <button type="button" onClick={onFloatCompany}>
          add company
        </button>
        {companies && companies.map(company => <Company />)}
      </div>
    );
  }
}

Companion18xx.propTypes = {
  onFloatCompany: PropTypes.func,
  companies: PropTypes.array,
};
