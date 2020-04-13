import { all } from 'redux-saga/effects';

import { StockSagas } from '../app/stock';

export default function* Sagas() {
  yield all([StockSagas()]);
}
