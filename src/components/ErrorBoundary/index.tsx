import { Component, ErrorInfo } from 'react';

import { ErrorDisplay } from './ErrorDisplay';
import { ErrorBoundaryProps, ErrorBoundaryState } from './type';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Error occured', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const { error } = this.state;
      return <ErrorDisplay errorText={error || 'Some unexpected error'} />;
    }

    return this.props.children;
  }
}
