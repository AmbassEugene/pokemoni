import React, {useCallback, useState} from 'react';
import {FlashList} from '@shopify/flash-list';
import {PokemonCard} from '../PokemonCard/PokemonCard';
import styled from 'styled-components/native';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {AppText} from '../../util/baseStyles';
import {SmallLoader} from '../LoadingComp/SmallLoader';
import {getResource} from '../../util/api/apiRequests';
import {type PokemonList} from '../../types';

const Wrapper = styled.View`
  margin-bottom: 10px;
`;

const LoadMoreText = styled(AppText)`
  color: ${props => props.theme.SECONDARY_COLOR};
  padding-horizontal: 5px;
`;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2,
  },
});

const PokemonListComp = ({resource}: PokemonListProps) => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState(resource.results);
  const [next, setNext] = useState(resource.next);

  const getMorePokemons = async (endPoint: string | null) => {
    if (!endPoint) {
      return;
    }

    setLoading(true);
    const {data} = await getResource<PokemonList>(endPoint);
    if (data) {
      setPokemons(prev => [...prev, ...data.results]);
      setNext(data.next);
    }
    setLoading(false);
  };

  const renderItem = useCallback(
    ({item}: any) => <PokemonCard link={item.url} name={item.name} />,
    [],
  );

  return (
    <Wrapper>
      <FlashList
        data={pokemons}
        renderItem={renderItem}
        // renderItem={({item}) => (
        //   <PokemonCard link={item.url} name={item.name} />
        // )}
        estimatedItemSize={190}
        numColumns={2}
        contentContainerStyle={styles.container}
        ListFooterComponent={
          loading ? (
            <SmallLoader />
          ) : (
            <FooterComp onHandlePress={() => getMorePokemons(next)} />
          )
        }
      />
    </Wrapper>
  );
};

type FooterCompProps = {
  onHandlePress: () => void;
};

const FooterComp = ({onHandlePress}: FooterCompProps) => (
  <TouchableOpacity onPress={onHandlePress}>
    <LoadMoreText center>Load More...</LoadMoreText>
  </TouchableOpacity>
);

export default PokemonListComp;

type PokemonListProps = {
  resource: PokemonList;
};
