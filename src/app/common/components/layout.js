import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from '@material-ui/core';

import InitialLoading from './initialLoading';

import '../assets/css/style.css';

const Layout = ({ children }) => {
  return (
    <Suspense fallback={<InitialLoading />}>
      <div className="App">
        <CssBaseline />

        {children}
      </div>
    </Suspense>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
