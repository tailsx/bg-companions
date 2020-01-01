import { createSelector } from 'reselect';

const selectCompanyIds = state => state.companies.allIds;

const selectCompanyData = state => state.companies.byId;

const makeSelectCompanyIds = () => createSelector(selectCompanyIds, companyIds => companyIds);
const makeSelectCompanyData = () => createSelector(selectCompanyData, data => data);

const makeSelectCompanies = () =>
  createSelector(makeSelectCompanyIds(), makeSelectCompanyData(), (companyIds, companies) =>
    companyIds.map(companyId => ({ companyId, ...companies[companyId] })),
  );

export { selectCompanyIds, selectCompanyData, makeSelectCompanies };
