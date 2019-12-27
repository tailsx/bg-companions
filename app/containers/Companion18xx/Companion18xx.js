import React from 'react';
import PropTypes from 'prop-types';

export default class Companion18xx extends React.PureComponent {
  render() {
    const { onAddCompany, companies } = this.props;
    return (
      <div>
        <h1>18XX Companions</h1>
        <button type="button" onClick={onAddCompany}>
          add company
        </button>
        {companies && companies.map(company => <div>yo</div>)}
      </div>
    );
  }
}

Companion18xx.propTypes = {
  onAddCompany: PropTypes.func,
};
