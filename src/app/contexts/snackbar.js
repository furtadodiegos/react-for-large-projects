import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const SnackbarContext = createContext();
const { Provider, Consumer } = SnackbarContext;

const SnackbarProvider = ({ children }) => {
  const [options, setOptions] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
    variant: 'success',
    message: '',
  });

  const { success, error } = useSelector((state) => state.responseMessage);

  function showSnack(message, variant) {
    setOptions((currentState) => ({ ...currentState, open: true, message, variant }));
  }

  function closeSnack() {
    setOptions((currentState) => ({ ...currentState, open: false, message: '' }));
  }

  useEffect(() => {
    if (error) {
      showSnack(error, 'error');
    }

    if (success) {
      showSnack(success, 'success');
    }
  }, [success, error]);

  return (
    <Provider
      value={{
        ...options,
        closeSnack,
      }}
    >
      {children}
    </Provider>
  );
};

SnackbarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SnackbarProvider, Consumer as SnackbarConsumer, SnackbarContext };
