import { createSelector } from 'reselect';

const selectCompany = (state, props) => state.companies.data[props.companyId];

const makeSelectCompanyName = () => createSelector(selectCompany, company => company.companyName);
const makeSelectCanEdit = () => createSelector(selectCompany, company => company.canEditName);
const makeSelectCompanyInitPrice = () =>
  createSelector(selectCompany, company => company.initSharePrice);
const makeSelectIsFloated = () => createSelector(selectCompany, company => company.isFloated);
const makeSelectCompanyTrains = () => createSelector(selectCompany, company => company.trainIds);

export {
  makeSelectCompanyName,
  makeSelectCompanyInitPrice,
  makeSelectCanEdit,
  makeSelectIsFloated,
  makeSelectCompanyTrains,
};
