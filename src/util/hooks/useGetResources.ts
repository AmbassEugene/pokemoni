import {useEffect, useState} from 'react';
import {getResource} from '../api/apiRequests';

export const useGetResources = (apiEndpoint: string) => {
  const [resourceData, setResourceData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetchData(apiEndpoint);
  }, []);

  const fetchData = async (endpoint: string) => {
    setLoading(true);
    const {responseError, data} = await getResource(endpoint);
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
};
