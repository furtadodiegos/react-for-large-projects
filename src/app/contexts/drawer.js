import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const DrawerContext = createContext();
const { Provider, Consumer } = DrawerContext;

const DrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [component, setComponent] = useState(null);

  const openDrawer = (props) => {
    setOpen(true);
    setComponent(props);
  };

  const closeDrawer = () => setOpen(false);

  return <Provider value={{ open, component, openDrawer, closeDrawer }}>{children}</Provider>;
};

DrawerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DrawerProvider, Consumer as DrawerConsumer, DrawerContext };
