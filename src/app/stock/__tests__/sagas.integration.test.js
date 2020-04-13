import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import StockSagas, { ALL, SAVE } from '../store/sagas';
import { responseSaga } from '../../common';
import Reducer, { initialState } from '../store/reducer';
import Types from '../store/types';

const payload = { image: 'url', name: 'Galaxy S10', price: 2980 };

describe('STOCK SAGAS - INTEGRATION TEST', () => {
  describe('ALL', () => {
    it('should return an empty stock', () => {
      return expectSaga(StockSagas)
        .withReducer(() => Reducer({ ...initialState, stock: [payload] }, { type: Types.ALL }))
        .provide([[matchers.call.fn(ALL)]])
        .fork(responseSaga)
        .hasFinalState({
          stock: [payload],
          fetching: false,
          success: '',
          error: '',
        })
        .dispatch({ type: Types.REQUEST, action: 'ALL' })
        .run();
    });
  });

  describe('SAVE', () => {
    it('Success', () => {
      return expectSaga(StockSagas)
        .withReducer(Reducer)
        .provide([[matchers.call.fn(SAVE), { ...payload, id: 1 }]])
        .fork(responseSaga)
        .hasFinalState({
          stock: [{ ...payload, id: 1 }],
          fetching: false,
          success: 'Stock save with success!',
          error: '',
        })
        .dispatch({ type: Types.REQUEST, action: 'SAVE' })
        .run();
    });

    it('Error with action return', () => {
      return (
        expectSaga(StockSagas)
          // Should test with Stock reducer
          .withReducer(Reducer)
          // Should force an error on call ALL
          .provide([[matchers.call.fn(SAVE), throwError(new Error('timeout'))]])
          // Should fork with responseSaga
          .fork(responseSaga)
          // The Reducer need to be the same
          .hasFinalState({ fetching: false, success: '', error: 'timeout', stock: [] })
          .dispatch({ type: Types.REQUEST, action: 'SAVE' })
          .run()
      );
    });
  });
});
