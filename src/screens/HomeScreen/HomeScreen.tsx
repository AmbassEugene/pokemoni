import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getResource} from '../../util/api/apiRequests';
import {apiEndpoints} from '../../util/api/apiEndpoints';
import {BaseScreen} from '../../components/BaseScreen/BaseScreen';
import {AppText, Card} from '../../util/baseStyles';

const HomeScreen = () => {
  const [pokemonData, setPokemonData] = useState({});
  const [error, setError] = useState();

  // TODO: Move to custom hook
  useEffect(() => {
    getPokemons(apiEndpoints.BASE_ENDPOINT);
  }, []);

  const getPokemons = async (endpoint: string) => {
    const {responseError, data} = await getResource(endpoint);
    setPokemonData(data);
    setError(responseError);
  };

  console.log('I am here ', {...pokemonData});

  return (
    <BaseScreen title={false} backBtn={false}>
      <Card>
        <AppText>I am a Card</AppText>
      </Card>
    </BaseScreen>
  );
};

export default HomeScreen;
