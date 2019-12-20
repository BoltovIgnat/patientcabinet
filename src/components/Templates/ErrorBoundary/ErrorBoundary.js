import React from 'react';

import { NotFoundPage } from '../../Root/PagesDinamic';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, errorInfo) {
    if(error) {
      this.setState({ hasError: true })
    }
  }

  render() {
    const { hasError } = this.state;
    if(hasError) {
      return (
        <React.Fragment>
          <NotFoundPage />
        </React.Fragment>

      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;