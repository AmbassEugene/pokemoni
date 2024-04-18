import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {getResource} from '../../util/api/apiRequests';
import {apiEndpoints} from '../../util/api/apiEndpoints';
import {BaseScreen} from '../../components/BaseScreen/BaseScreen';
import {AppText, Card} from '../../util/baseStyles';
import {getPokemonImageUri} from '../../util/formatters/getImage';
import {useGetResources} from '../../util/hooks/useGetResources';
import {FlashList} from '@shopify/flash-list';
import {PokemonCard} from '../../components/PokemonCard/PokemonCard';
import PokemonListComp from '../../components/PokemonListComp/PokemonListComp';

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
];

const HomeScreen = () => {
  const {resourceData, error, loading, getNext} = useGetResources(
    apiEndpoints.BASE_ENDPOINT,
  );

  // Checks if resourceData is not empty
  const hasData = resourceData?.results?.length > 0;

  console.log(resourceData?.results);

  return (
    <BaseScreen backBtn={false}>
      {/* <View style={{flex: 1, backgroundColor: 'pink', padding: 20}}> */}
      {loading && <AppText>Loading ...</AppText>}
      {hasData && <PokemonListComp resource={resourceData} />}
      {/* </View> */}
    </BaseScreen>
  );
};

export default HomeScreen;
