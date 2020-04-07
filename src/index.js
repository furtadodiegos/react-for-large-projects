import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import * as Sentry from '@sentry/browser';

import { store, persistor, Errors, Routes } from './configs';

import { version } from '../package.json';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DNS,
    release: version,
  });
}

ReactDOM.render(
  <Errors>
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </Errors>,
  document.getElementById('root'),
);
