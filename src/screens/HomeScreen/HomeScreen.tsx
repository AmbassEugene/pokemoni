import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getResource} from '../../util/api/apiRequests';
import {apiEndpoints} from '../../util/api/apiEndpoints';

const HomeScreen = () => {
  const [pokemonData, setPokemonData] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    getPokemon(apiEndpoints.BASE_ENDPOINT);
  }, []);

  const getPokemon = async (endpoint: string) => {
    const {responseError, data} = await getResource(endpoint);
    setPokemonData(data);
    setError(responseError);
    console.log(data);
  };

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
