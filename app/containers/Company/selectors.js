import { createSelector } from 'reselect';

const RADIX_DECIMAL = 10;

const selectCompany = (state, props) => state.companies.data[props.companyId];

const makeSelectCompanyName = () => createSelector(selectCompany, company => company.companyName);
const makeSelectCanEdit = () => createSelector(selectCompany, company => company.canEditName);
const makeSelectCompanyInitPrice = () =>
  createSelector(selectCompany, company => company.initSharePrice);
const makeSelectIsFloated = () => createSelector(selectCompany, company => company.isFloated);
const makeSelectCompanyTrains = () => createSelector(selectCompany, company => company.trainIds);
const makeSelectCompanyTreasury = () =>
  createSelector(selectCompany, company => parseInt(company.treasury, RADIX_DECIMAL));

export {
  makeSelectCompanyName,
  makeSelectCompanyInitPrice,
  makeSelectCanEdit,
  makeSelectIsFloated,
  makeSelectCompanyTrains,
  makeSelectCompanyTreasury,
};
