import { createSelector } from 'reselect';

const getStockData = () =>
  createSelector(
    (state) => state.stock,
    ({ stock }) => stock,
  );

const getStockFetching = () =>
  createSelector(
    (state) => state.stock,
    ({ fetching }) => fetching,
  );

export default { getStockData, getStockFetching };
