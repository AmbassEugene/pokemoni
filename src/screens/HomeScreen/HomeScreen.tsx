import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {getResource} from '../../util/api/apiRequests';
import {apiEndpoints} from '../../util/api/apiEndpoints';
import {BaseScreen} from '../../components/BaseScreen/BaseScreen';
import {AppText, Card} from '../../util/baseStyles';
import {getPokemonImgUri} from '../../util/formatters/getImage';
import {useGetResources} from '../../util/hooks/useGetResources';
import {FlashList} from '@shopify/flash-list';
import {PokemonCard} from '../../components/PokemonCard/PokemonCard';
import PokemonListComp from '../../components/PokemonListComp/PokemonListComp';
import {LoadingComp} from '../../components/LoadingComp/LoadingComp';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
`;

const HomeScreen = () => {
  const {resourceData, error, loading, getNext} = useGetResources(
    apiEndpoints.BASE_ENDPOINT,
  );

  // Checks if resourceData is not empty
  const hasData: {} = resourceData?.results?.length > 0;

  return (
    <BaseScreen backBtn={false}>
      <Wrapper>
        {loading && <LoadingComp />}
        {hasData && <PokemonListComp resource={resourceData} />}
      </Wrapper>
    </BaseScreen>
  );
};

export default HomeScreen;
