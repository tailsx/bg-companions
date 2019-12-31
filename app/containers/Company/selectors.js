import { createSelector } from 'reselect';

const selectCompanies = state => state.company;

const makeSelectIsFloated = () =>
  createSelector(
    () => (state, props) => props.id,
    () => selectCompanies,
    (companyId, companies) => {
      console.log(`selecting ${companyId}`);
      if (companyId in companies) {
        return companies[companyId].isFloated;
      }
      return false;
    },
  );
/* 
const makeSelectCompanies = () =>
  createSelector(
    (state, props) => console.log(props.id),
    selectCompany,
    companionState => companionState.floated,
  ); */

export { selectCompanies, makeSelectIsFloated };
