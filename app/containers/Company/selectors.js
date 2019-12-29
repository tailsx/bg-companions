import { createSelector } from 'reselect';

const selectCompany = state => state.company;
/* 
const makeSelectCompanies = () =>
  createSelector(
    (state, props) => console.log(props.id),
    selectCompany,
    companionState => companionState.floated,
  ); */

export { selectCompany };
