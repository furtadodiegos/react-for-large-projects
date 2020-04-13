import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';

import { makeStyles, Paper, Typography, IconButton } from '@material-ui/core';
import { NavigateBefore } from '@material-ui/icons';

const useStyles = (pathname) =>
  makeStyles(() => ({
    root: {
      height: 200,
      borderRadius: '0 0 40px 40px',
      textTransform: 'uppercase',
      color: '#FFF',
    },
    title: {
      position: 'relative',
      top: pathname !== '/' ? '15%' : '35%',
    },
    stock: {
      background: 'linear-gradient(to right, #fdbb2d, #22c1c3)',
    },
  }));

const HeaderComponent = ({ title, page }) => {
  const {
    location: { pathname },
    push,
  } = useHistory();
  const classes = useStyles(pathname)();

  return (
    <Paper elevation={4} className={cx(classes.root, classes[page])}>
      {pathname !== '/' && (
        <IconButton color="inherit" onClick={() => push('/')} id="headerLink">
          <NavigateBefore fontSize="large" />
        </IconButton>
      )}

      <Typography variant="h4" component="h4" align="center" className={classes.title}>
        {title}
      </Typography>
    </Paper>
  );
};

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default HeaderComponent;
