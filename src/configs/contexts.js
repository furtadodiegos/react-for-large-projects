import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '@material-ui/core/styles';

import Theme from './theme';
import { DrawerProvider, SnackbarProvider } from '../app/contexts';

const Contexts = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <SnackbarProvider>
      <DrawerProvider>{children}</DrawerProvider>
    </SnackbarProvider>
  </ThemeProvider>
);

Contexts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Contexts;
