import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {PokemonCard} from '../PokemonCard/PokemonCard';
import {getPokemonImgUri} from '../../util/formatters/getImage';
import styled from 'styled-components/native';
import {Alert} from 'react-native';

const Wrapper = styled.View`
  flex: 1;
`;

const PokemonListComp = ({resource}: PokemonListProps) => {
  return (
    <Wrapper>
      <FlashList
        data={resource?.results}
        renderItem={({item, index}) => (
          <PokemonCard
            link={item.url}
            name={item.name}
            imageUri={getPokemonImgUri(item.url)}
            itemIndex={index}
          />
        )}
        estimatedItemSize={200}
        numColumns={2}
        // centerContent={true}
        contentContainerStyle={{padding: 2}}
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
