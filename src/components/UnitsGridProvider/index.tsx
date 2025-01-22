import { UnitsProviderProps } from './type';
import { UnitsGrid } from './UnitsGrid';

export const UnitsProvider = ({ artHook }: UnitsProviderProps) => {
  const { response, isLoading, error } = artHook();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!response) {
    return <div>No data available</div>;
  }

  const { data } = response;

  return <UnitsGrid artWorks={data} />;
};
