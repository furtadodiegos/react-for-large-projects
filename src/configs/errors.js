import React from 'react';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';

class Errors extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Start Sentry with scope
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);

      // Send to sentry all the scope error.
      Sentry.captureException(error);
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <p>Error page</p>;
    }

    return children;
  }
}

Errors.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Errors;
