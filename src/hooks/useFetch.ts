import { useEffect, useState } from 'react';

import { DataResponse } from './type';

export const useFetch = <T>(
  fetchFunction: () => Promise<DataResponse<T>>,
  dependencies: unknown[] = [],
) => {
  const [response, setResponse] = useState<DataResponse<T> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetchFunction();
      setResponse(response);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, dependencies);

  return { response, isLoading, error };
};
