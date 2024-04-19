import {apiEndpoints} from '../../util/api/apiEndpoints';
import {BaseScreen} from '../../components/BaseScreen/BaseScreen';
import {useGetResources} from '../../util/hooks/useGetResources';

import PokemonListComp from '../../components/PokemonListComp/PokemonListComp';
import {LoadingComp} from '../../components/LoadingComp/LoadingComp';
import styled from 'styled-components/native';
import {SmallLoader} from '../../components/LoadingComp/SmallLoader';
import {useState} from 'react';

const Wrapper = styled.View`
  flex: 1;
`;

const HomeScreen = () => {
  const [loadMore, setLoadMore] = useState(false);

  const {resourceData, error, loading, fetchData} = useGetResources(
    apiEndpoints.BASE_ENDPOINT,
  );

  // const fetchMorePokemons = (link: string) => {
  //   setLoadMore(true);
  //   fetchData(link);
  // };

  // Checks if resourceData is not empty
  const hasData: {} = resourceData?.results?.length > 0;

  return (
    <BaseScreen backBtn={false}>
      <Wrapper>
        {loading && !loadMore && <LoadingComp />}
        {hasData && (
          <PokemonListComp
            // fetchData={fetchMorePokemons}
            resource={resourceData}
          />
        )}
      </Wrapper>
    </BaseScreen>
  );
};

export default HomeScreen;
