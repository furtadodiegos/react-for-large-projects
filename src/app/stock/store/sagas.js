/* eslint-disable no-unused-vars, no-eval */
import { call, put, fork, takeLatest, all } from 'redux-saga/effects';

import Types from './types';
import { getAll, save, update } from '../services/apiCalls';
import { responseSaga } from '../../common';

export function* UPDATE(props) {
  try {
    const { data } = yield update(props);

    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export function* SAVE(props) {
  const { data } = yield call(save, props);

  return data;
}

export function* ALL() {
  try {
    const { data } = yield call(getAll);

    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export function* rootSaga(props) {
  try {
    const payload = yield call(eval(props.action), props.data);

    yield put({ type: Types[props.action], payload });
  } catch (e) {
    yield put({ type: Types.FAILURE, error: e.message });
  }

  yield fork(responseSaga);
}

export default function* StockSagas() {
  yield all([takeLatest(Types.REQUEST, rootSaga)]);
}
