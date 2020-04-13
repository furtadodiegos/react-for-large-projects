import configureMockStore from 'redux-mock-store';

import Actions from '../store/actions';
import Types from '../store/types';
import Reducer from '../store/reducer';

const mockStore = configureMockStore([]);

describe('Stock Actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({ stock: Reducer });
  });

  it('Should create an action to get all products', async () => {
    await store.dispatch(Actions.all());

    expect(store.getActions()).toEqual([{ type: Types.REQUEST, action: 'ALL' }]);
  });

  it('Should create an action to save one product', async () => {
    const data = { name: 'product name' };

    await store.dispatch(Actions.save(data));

    expect(store.getActions()).toEqual([{ type: Types.REQUEST, action: 'SAVE', data }]);
  });

  it('Should create an action to update one product', async () => {
    const data = { name: 'product name' };

    await store.dispatch(Actions.update(data));

    expect(store.getActions()).toEqual([{ type: Types.REQUEST, action: 'UPDATE', data }]);
  });
});
