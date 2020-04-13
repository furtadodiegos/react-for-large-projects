import Reducer, { initialState } from '../store/reducer';
import Types from '../store/types';

const payload = { id: 1, image: 'url', name: 'Galaxy S10', price: 2980 };

describe('Stock Reducer', () => {
  it('Should return the initialState if type is undefined', () => {
    const newState = Reducer(initialState, { type: 'UNDEFINED_ACTION' });

    expect(newState).toBe(initialState);
  });

  it('Should return the catch error if something going wrong', () => {
    const newState = Reducer(initialState, { type: Types.SAVE });

    expect(newState).toEqual({ ...initialState, error: 'Payload is invalid!' });
  });

  // We will no test the all case because always will return initial stock
  // it.only('Should test all case', () => {});

  it('Should SAVE with success', () => {
    const firstState = Reducer(initialState, {
      type: Types.SAVE,
      payload,
    });

    expect(firstState.stock.length).toBe(1);
    expect(firstState).toEqual({
      stock: [payload],
      fetching: false,
      success: 'Stock save with success!',
      error: '',
    });
  });

  it('Should return the firstState because the payload is invalid', () => {
    const firstState = Reducer(initialState, {
      type: Types.SAVE,
      payload,
    });

    expect(firstState.stock.length).toBe(1);
    expect(firstState).toEqual({
      stock: [payload],
      fetching: false,
      success: 'Stock save with success!',
      error: '',
    });

    const secondState = Reducer(firstState, {
      type: Types.SAVE,
      payload: { name: 'Galaxy S10', price: 2980 },
    });

    expect(secondState.stock.length).toBe(1);
    expect(secondState).toEqual({
      stock: [payload],
      fetching: false,
      success: '',
      error: 'Payload is invalid!',
    });
  });

  it('Should Update with success', () => {
    const payloadUpdate = { ...payload, image: 'opa' };

    const firstState = Reducer(
      { ...initialState, stock: [payload] },
      {
        type: Types.UPDATE,
        payload: payloadUpdate,
      },
    );

    expect(firstState.stock.length).toBe(1);
    expect(firstState).toEqual({
      stock: [payloadUpdate],
      fetching: false,
      success: 'Stock updated with success!',
      error: '',
    });
  });

  it('Should not UPDATE - id not find', () => {
    const payloadUpdate = { ...payload, image: 'opa' };
    delete payloadUpdate.id;

    const firstState = Reducer(
      { ...initialState, stock: [payload] },
      {
        type: Types.UPDATE,
        payload: payloadUpdate,
      },
    );

    expect(firstState.stock.length).toBe(1);

    expect(firstState).toEqual({
      stock: [payload],
      fetching: false,
      success: '',
      error: 'id not found!',
    });
  });
});
