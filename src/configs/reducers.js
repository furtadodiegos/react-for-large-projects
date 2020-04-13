import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { StockReducer } from '../app/stock';

// Reducer used to show messages from each action
const responseMessage = (state, { payload }) => ({
  success: payload?.success || '',
  error: payload?.error || '',
});

// Instantiate all reducers here
const Reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    responseMessage,
    stock: StockReducer,
  });

export default Reducers;
