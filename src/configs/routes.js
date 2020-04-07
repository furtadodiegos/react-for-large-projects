import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import { history } from './store';

const pages = [
  { path: '/', exact: true, component: () => <p>Hello Home!</p> },
  { path: '/404', exact: true, component: () => <p>Page Not Found</p> },
];

const Routes = () => (
  <ConnectedRouter history={history}>
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <section className="route-section">
            <Switch location={location}>
              {pages.map(({ path, exact, component: Component }) => (
                <Route exact={exact} path={path} component={Component} key={path} />
              ))}
              <Redirect
                to={{
                  pathname: '/404',
                  state: { from: location },
                }}
              />
            </Switch>
          </section>
        )}
      />
    </BrowserRouter>
  </ConnectedRouter>
);

export default Routes;
