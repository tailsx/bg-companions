/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { runAllAsync } from 'containers/Companies/actions';

import { makeSelectTrainData } from 'containers/Trains/selectors';
import { makeSelectTrainsByCompany } from './selectors';
import { RUN_ALL } from './constants';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const trains = yield select(makeSelectTrainData());
  const companies = yield select(makeSelectTrainsByCompany());
  console.log(trains, companies);
  const revenue = Object.entries(companies).reduce(
    (accumlator, [companyId, companyTrains]) => ({
      ...accumlator,
      [companyId]: companyTrains.reduce(
        (totalRevenue, trainId) => totalRevenue + trains[trainId].totalRevenue,
        0,
      ),
    }),
    {},
  );
  yield put(runAllAsync(revenue));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(RUN_ALL, getRepos);
}
