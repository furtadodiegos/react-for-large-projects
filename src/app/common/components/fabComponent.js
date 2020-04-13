import React from 'react';
import PropTypes from 'prop-types';

import { Fab } from '@material-ui/core';

const FabComponent = ({ icon, type, action, disabled, styles }) => (
  <Fab color="primary" disabled={disabled} type={type} style={styles} onClick={action}>
    {icon}
  </Fab>
);

FabComponent.propTypes = {
  icon: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  action: PropTypes.func,
  styles: PropTypes.instanceOf(Object),
};

FabComponent.defaultProps = {
  styles: {},
  action: null,
  disabled: false,
};

export default FabComponent;
