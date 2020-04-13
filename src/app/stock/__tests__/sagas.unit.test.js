import { testSaga } from 'redux-saga-test-plan';

import { rootSaga, ALL, SAVE } from '../store/sagas';
import { save, getAll } from '../services/apiCalls';
import { responseSaga } from '../../common';

import Types from '../store/types';

const payload = { image: 'url', name: 'Galaxy S10', price: 2980 };

describe('STOCK SAGAS - UNIT TEST', () => {
  it('should test rootSaga with ALL action', () => {
    const saga = testSaga(rootSaga, { action: 'ALL', data: undefined });

    saga
      .next()
      .call(ALL, undefined)
      .next({ ...payload, id: 1 })
      .put({ type: Types.ALL, payload: { ...payload, id: 1 } })
      .next()
      .fork(responseSaga)
      .next()
      .isDone();
  });

  it('should test ALL function', () => {
    const saga = testSaga(ALL);

    saga
      .next()
      .call(getAll)
      .next({ data: { ...payload, id: 1 } })
      .returns({ ...payload, id: 1 })
      .next()
      .isDone();
  });

  it('should test SAVE function', () => {
    const saga = testSaga(SAVE, payload);

    saga
      .next()
      .call(save, payload)
      .next({ data: { ...payload, id: 1 } })
      .returns({ ...payload, id: 1 })
      .next()
      .isDone();
  });
});
