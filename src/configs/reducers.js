import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Reducers configs
const Reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
  });

export default Reducers;
