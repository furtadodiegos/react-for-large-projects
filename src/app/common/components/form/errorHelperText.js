import React from 'react';
import PropTypes from 'prop-types';

import { FormHelperText } from '@material-ui/core';

const ErrorHelperText = ({ error }) => <FormHelperText>{error}</FormHelperText>;

ErrorHelperText.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorHelperText;
