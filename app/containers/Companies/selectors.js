import { createSelector } from 'reselect';

const selectCompanyIds = state => state.companies.allIds;

const selectCompanyData = state => state.companies.byId;

const makeSelectCompanies = () =>
  createSelector(selectCompanyIds, selectCompanyData, (companyIds, companies) =>
    companyIds.map(companyId => ({ companyId, ...companies[companyId] })),
  );

export { selectCompanyIds, selectCompanyData, makeSelectCompanies };
