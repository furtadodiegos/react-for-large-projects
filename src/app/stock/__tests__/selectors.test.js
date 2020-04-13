import Selectors from '../store/selectors';
import Types from '../store/types';
import Reducer, { initialState } from '../store/reducer';

describe('SALES SELECTORS', () => {
  it('Should test getStockData with empty stock', () => {
    const selected = Selectors.getStockData();

    expect(selected.resultFunc(Reducer(initialState, {}))).toEqual([]);
  });

  it('Should test getSalesTotal with multiple sales', () => {
    const selected = Selectors.getStockData();
    const stock = [
      { id: 1, image: 'url', name: 'Galaxy S10', price: 2980 },
      { id: 2, image: 'url', name: 'Galaxy S20', price: 2980 },
      { id: 3, image: 'url', name: 'Galaxy S30', price: 2980 },
    ];

    expect(selected.resultFunc(Reducer({ ...initialState, stock }, {}))).toEqual(stock);
  });

  it.only('Should test getFetching stock', () => {
    const selected = Selectors.getStockFetching();

    expect(selected.resultFunc(Reducer(initialState, {}))).toEqual(false);
    expect(selected.resultFunc(Reducer(initialState, { type: Types.REQUEST }))).toEqual(true);
    expect(selected.resultFunc(Reducer(initialState, { type: Types.ALL }))).toEqual(false);
  });
});
