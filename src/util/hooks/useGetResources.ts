import {useEffect, useState} from 'react';
import {getResource} from '../api/apiRequests';

export const useGetResources = (apiEndpoint: string) => {
  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetchData(apiEndpoint);
  }, [apiEndpoint]);

  // Refactor this using promises inside the useEffect hook
  const fetchData = async (endpoint: string) => {
    setLoading(true);
    const {responseError, data} = await getResource(endpoint);
    setPokemonData(data);
    setError(responseError);
    setLoading(false);
  };

  return {
    pokemonData,
    error,
    loading,
  };
};
