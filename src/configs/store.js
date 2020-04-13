import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storageSession from 'redux-persist/lib/storage/session';

// Reducers configs
import Reducers from './reducers';
// Sagas configs
import Sagas from './sagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

// Redux-persist configuration
const persistConfig = {
  key: 'root',
  storage: storageSession,
  stateReconciler: autoMergeLevel2,
  blacklist: ['responseMessage'], // Set the reducers that will not be persisted
};

// Merge redux-persist with our reducers
const persistedReducer = persistReducer(persistConfig, Reducers(history));

const middlewares = [routerMiddleware(history), sagaMiddleware];

// Show on console all history from reducer
const loggerMiddleware = createLogger({
  predicate: () =>
    process.env.NODE_ENV !== 'production' && process.env.REACT_APP_WITH_LOGGER === 'true',
});

middlewares.push(loggerMiddleware);

// Make store to export with redux-persist, reducers and middlewares
const store = createStore(persistedReducer, compose(applyMiddleware(...middlewares)));

// Start saga middleware
sagaMiddleware.run(Sagas);

// Object used to start the PersisGate HOC on entry point application(index.js)
const persistor = persistStore(store);

if (process.env.REACT_APP_TEST_MODE === 'true') persistor.purge();

export { store, history, persistor };
