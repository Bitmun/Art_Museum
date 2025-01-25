import { UnitsProviderProps } from './type';
import { UnitsGrid } from './UnitsGrid';

export const UnitsGridProvider = ({ artHook }: UnitsProviderProps) => {
  const { response, isLoading, error } = artHook();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    throw new Error('Other works fetching error');
  }

  if (!response) {
    return <div>No data available</div>;
  }

  const { data } = response;

  return <UnitsGrid artWorks={data} />;
};
