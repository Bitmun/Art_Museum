import { ErrorBoundary } from 'components/ErrorBoundary';

export const withErrorBoundary = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  const Component: React.FC<P> = (props) => (
    <ErrorBoundary>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );
  return Component;
};
