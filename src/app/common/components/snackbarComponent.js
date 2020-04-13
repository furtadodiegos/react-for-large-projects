import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { green, amber } from '@material-ui/core/colors';
import { IconButton, Snackbar, SnackbarContent, withStyles } from '@material-ui/core';
import {
  Close as CloseIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  CheckCircle as CheckCircleIcon,
  Info as InfoIcon,
} from '@material-ui/icons';

import { SnackbarContext } from '../../contexts';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles = (theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: 4,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

function MySnackbarContent({ classes, message, variant, close, ...other }) {
  const Icon = variantIcon[variant];
  const getMessage = () => (
    <span id="client-snackbar" className={classes.message}>
      <Icon className={cx(classes.icon, classes.iconVariant)} />
      {message}
    </span>
  );

  return (
    <SnackbarContent
      className={cx(classes[variant])}
      aria-describedby="client-snackbar"
      message={getMessage()}
      action={[
        <IconButton
          href=""
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={close}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  message: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  close: PropTypes.func.isRequired,
};

const MySnackbarContentWrapper = withStyles(styles)(MySnackbarContent);

const SnackbarComponent = () => {
  const { open, vertical, horizontal, variant, message, closeSnack } = useContext(SnackbarContext);

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={closeSnack}
      autoHideDuration={4000}
    >
      <MySnackbarContentWrapper variant={variant} message={message} close={closeSnack} />
    </Snackbar>
  );
};

export default SnackbarComponent;
