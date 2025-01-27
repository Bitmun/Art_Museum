import { UnitsProviderProps } from './type';
import { UnitsGrid } from './UnitsGrid';

import { Loader } from 'components/Loader';

export const UnitsGridProvider = ({ artHook }: UnitsProviderProps) => {
  const { response, isLoading, error } = artHook();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    throw new Error('Other works fetching error');
  }

  if (!response) {
    throw new Error('No response');
  }

  const { data } = response;

  return <UnitsGrid artWorks={data} />;
};
