import { select, put } from 'redux-saga/effects';

// Handle all response from saga and dispatch a message for responseMessageReducer
export default function* responseSaga() {
  const state = yield select();

  const { success, error } = Object.values(state)
    .filter(
      (currentState) =>
        (currentState.success && currentState.success !== '') ||
        (currentState.error && currentState.error !== ''),
    )
    .reduce((acc, cur) => ({ success: cur.success, error: cur.error }), {});

  yield put({ type: 'RESPONSE_MESSAGE', payload: { success, error } });
}
