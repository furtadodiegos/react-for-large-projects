import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import * as Sentry from '@sentry/browser';

import { store, persistor, Errors, Routes, Contexts } from './configs';
import { Layout } from './app/common';
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
        <Contexts>
          <Layout>
            <Routes />
          </Layout>
        </Contexts>
      </PersistGate>
    </Provider>
  </Errors>,
  document.getElementById('root'),
);
