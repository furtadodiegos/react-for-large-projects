import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Import your reducers here
// import {} from '';

// Reducers configs
const Reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    // Reducers
  });

export default Reducers;
