import { createSelector } from 'reselect';

const RADIX_DECIMAL = 10;

const selectShareOptions = state => state.companion18xx.sharePrices;

const selectCompany = (state, props) => state.companies.data[props.companyId];
const selectCompanyTrains = (state, props) => state.companies.trainsByCompanyId[props.companyId];
const selectCompanyTreasury = (state, props) => state.companies.treasuryById[props.companyId];

const makeSelectShareOptions = () => createSelector(selectShareOptions, options => options);
const makeSelectCompanyName = () => createSelector(selectCompany, company => company.companyName);
const makeSelectCanEdit = () => createSelector(selectCompany, company => company.canEditName);
const makeSelectCompanyInitPrice = () =>
  createSelector(selectCompany, company => company.initSharePrice);
const makeSelectIsFloated = () => createSelector(selectCompany, company => company.isFloated);
const makeSelectCompanyTrains = () => createSelector(selectCompanyTrains, trains => trains);
const makeSelectCompanyTreasury = () =>
  createSelector(selectCompanyTreasury, treasury => parseInt(treasury, RADIX_DECIMAL));

export {
  makeSelectCompanyName,
  makeSelectCompanyInitPrice,
  makeSelectCanEdit,
  makeSelectIsFloated,
  makeSelectCompanyTrains,
  makeSelectCompanyTreasury,
  makeSelectShareOptions,
};
