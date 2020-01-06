import { all, takeEvery } from 'redux-saga/effects';
import allRevenue from './allRevenueSaga';
import { RUN_ALL } from '../constants';

export default function* companiesSaga() {
  yield all([takeEvery(RUN_ALL, allRevenue)]);
}
