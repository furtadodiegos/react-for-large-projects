import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '@material-ui/core/styles';

import Theme from './theme';

const Contexts = ({ children }) => <ThemeProvider theme={Theme}>{children}</ThemeProvider>;

Contexts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Contexts;
