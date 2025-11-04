import { Component, ReactNode } from 'react';
import ErrorFallback from './ErrorFallback';

type Props = {
  children: ReactNode;
  onReset?: () => void;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error('Error Boundary Caught:', error, errorInfo);
  }

  resetBoundary = () => {
    this.setState({ hasError: false, error: null });
    this.props.onReset?.();
  };

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <ErrorFallback error={this.state.error} onRetry={this.resetBoundary} />
      );
    }

    return this.props.children;
  }
}
