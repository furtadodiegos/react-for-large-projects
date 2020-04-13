import React, { useContext } from 'react';

import { Drawer, Grid, makeStyles, Typography, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import { DrawerContext } from '../../contexts';

const useStyles = makeStyles(() => ({
  drawer: {
    borderRadius: '20px 20px 0 0',
    padding: 20,
  },
}));

const DrawerComponent = () => {
  const classes = useStyles();
  const { open, closeDrawer, component } = useContext(DrawerContext);

  return (
    <Drawer
      anchor="bottom"
      id="drawer-component"
      open={open}
      onClose={closeDrawer}
      classes={{
        paper: classes.drawer,
      }}
    >
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="subtitle1">Produto</Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={closeDrawer}>
            <Close />
          </IconButton>
        </Grid>
      </Grid>

      {component}
    </Drawer>
  );
};

export default DrawerComponent;
