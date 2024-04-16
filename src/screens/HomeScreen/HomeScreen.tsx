import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getResource} from '../../util/api/apiRequests';
import {apiEndpoints} from '../../util/api/apiEndpoints';
import {BaseScreen} from '../../components/BaseScreen/BaseScreen';
import {AppText, Card} from '../../util/baseStyles';
import {getPokemonImageUri} from '../../util/formatters/getImage';
import {useGetResources} from '../../util/hooks/useGetResources';

const HomeScreen = () => {
  const {pokemonData, error, loading} = useGetResources(
    apiEndpoints.BASE_ENDPOINT,
  );

  console.log(pokemonData);
  return (
    <BaseScreen backBtn={false}>
      <Card>
        <AppText>I am a Card</AppText>
      </Card>
    </BaseScreen>
  );
};

export default HomeScreen;
