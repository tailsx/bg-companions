import { createSelector } from 'reselect';

const selectCompanyIds = state => state.companies.allIds;
const selectCompanyData = state => state.companies.data;
const selectTrainsByCompanyId = state => state.companies.trainsByCompanyId;

const makeSelectCompanies = () =>
  createSelector(selectCompanyIds, selectCompanyData, (companyIds, companies) =>
    companyIds.map(companyId => ({ companyId, ...companies[companyId] })),
  );

const makeSelectTrainsByCompany = () => createSelector(selectTrainsByCompanyId, trains => trains);

export { selectCompanyIds, selectCompanyData, makeSelectCompanies, makeSelectTrainsByCompany };
