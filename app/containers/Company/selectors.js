import { createSelector } from 'reselect';

const selectCompany = (state, props) => state.companies.byId[props.companyId];

const makeSelectCompanyName = () => createSelector(selectCompany, company => company.companyName);

const makeSelectCompanyInitPrice = () =>
  createSelector(selectCompany, company => company.initSharePrice);

export { makeSelectCompanyName, makeSelectCompanyInitPrice };
