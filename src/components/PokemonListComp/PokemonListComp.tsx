import React, {useState} from 'react';
import {FlashList} from '@shopify/flash-list';
import {PokemonCard} from '../PokemonCard/PokemonCard';
import {getPokemonImgUri} from '../../util/formatters/getImage';
import styled from 'styled-components/native';
import {Alert, TouchableOpacity} from 'react-native';
import {AppText} from '../../util/baseStyles';
import {SmallLoader} from '../LoadingComp/SmallLoader';
import {getResource} from '../../util/api/apiRequests';
import {useGetResources} from '../../util/hooks/useGetResources';

const Wrapper = styled.View`
  /* flex: 1; */
  margin-bottom: 10px;
`;

const LoadMoreText = styled(AppText)`
  color: ${props => props.theme.SECONDARY_COLOR};
  padding-horizontal: 5px;
`;

const PokemonListComp = ({resource, fetchData}: PokemonListProps) => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState(resource.results);
  const [next, setNext] = useState(resource.next);

  const getMorePokemons = async (endPoint: string) => {
    setLoading(true);
    const {responseError, data} = await getResource(endPoint);
    setPokemons(prev => [...prev, ...data.results]);
    setNext(data.next);
    setLoading(false);
  };

  // const {resourceData, error, loading, fetchData} = useGetResources(
  //   resource.next,
  // );

  const FooterComp = () => (
    <TouchableOpacity onPress={() => getMorePokemons(next)}>
      <LoadMoreText center>Load More...</LoadMoreText>
    </TouchableOpacity>
  );

  return (
    <Wrapper>
      <FlashList
        data={pokemons}
        renderItem={({item, index}) => (
          <PokemonCard
            link={item.url}
            name={item.name}
            imageUri={getPokemonImgUri(item.url)}
            itemIndex={index}
          />
        )}
        estimatedItemSize={190}
        numColumns={2}
        // centerContent={true}
        contentContainerStyle={{
          paddingHorizontal: 2,
        }}
        // onEndReachedThreshold={0.8}
        // onEndReached={() => getMorePokemons(next)}
        ListFooterComponent={loading ? SmallLoader : FooterComp}
      />
    </Wrapper>
  );
};

export default PokemonListComp;

type PokemonListProps = {
  resource: {
    results: [
      {
        name: string;
        url: string;
      },
    ];
    next: string;
  };
};
