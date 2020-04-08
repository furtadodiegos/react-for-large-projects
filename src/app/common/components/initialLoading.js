import React from 'react';

import { makeStyles, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  align: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const InitialLoading = () => {
  const classes = useStyles();

  return (
    <div className={classes.align}>
      <CircularProgress />
    </div>
  );
};

export default InitialLoading;
