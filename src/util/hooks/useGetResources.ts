import {useEffect, useState} from 'react';
import {getResource} from '../api/apiRequests';

export function useGetResources<T>(apiEndpoint: string) {
  const [resourceData, setResourceData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetchData(apiEndpoint);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchData = async (endpoint: string) => {
    setLoading(true);
    const {responseError, data} = await getResource<T>(endpoint);
    setResourceData(data);
    setError(responseError);
    setLoading(false);
  };

  return {
    resourceData,
    error,
    loading,
    fetchData,
  };
}
