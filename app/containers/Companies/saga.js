import { put, select, takeLatest } from 'redux-saga/effects';
import { runAllAsync } from 'containers/Companies/actions';

import { makeSelectTrainData } from 'containers/Trains/selectors';
import { makeSelectTrainsByCompany } from './selectors';
import { RUN_ALL } from './constants';

export function* calcRevenueHelper() {
  const trains = yield select(makeSelectTrainData());
  const companies = yield select(makeSelectTrainsByCompany());

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
export default function* calcRevenue() {
  yield takeLatest(RUN_ALL, calcRevenueHelper);
}
