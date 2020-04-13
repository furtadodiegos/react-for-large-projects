import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { history } from './store';

import { StockPage } from '../app/stock';

const pages = [
  { path: '/', exact: true, component: StockPage },
  { path: '/404', exact: true, component: () => <p>Page Not Found</p> },
];

const Routes = () => (
  <ConnectedRouter history={history}>
    <BrowserRouter>
      <Route
        render={({ location }) => (
          // TransitionGroup and CSSTransition are responsible to apply animations
          <TransitionGroup>
            {/* The classname fade contain our css animation */}
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
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
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </BrowserRouter>
  </ConnectedRouter>
);

export default Routes;
