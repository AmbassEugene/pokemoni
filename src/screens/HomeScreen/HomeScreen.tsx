import {apiEndpoints} from '../../util/api/apiEndpoints';
import {BaseScreen} from '../../components/BaseScreen/BaseScreen';
import {useGetResources} from '../../util/hooks/useGetResources';

import PokemonListComp from '../../components/PokemonListComp/PokemonListComp';
import {LoadingComp} from '../../components/LoadingComp/LoadingComp';
import styled from 'styled-components/native';
import React from 'react';
import {type PokemonList} from '../../types';

const Wrapper = styled.View`
  flex: 1;
  position: relative;
`;

const HomeScreen = () => {
  const {resourceData, loading} = useGetResources<PokemonList>(
    apiEndpoints.BASE_ENDPOINT,
  );

  // Checks if resourceData is empty
  const hasData = (resourceData?.results.length ?? 0) > 0;

  return (
    <Wrapper>
      <BaseScreen backBtn={false}>
        {loading && <LoadingComp />}
        {hasData && resourceData && <PokemonListComp resource={resourceData} />}
      </BaseScreen>
    </Wrapper>
  );
};

export default HomeScreen;
