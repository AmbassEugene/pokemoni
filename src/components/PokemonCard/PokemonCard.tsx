import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity, ViewProps} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AppText, Card} from '../../util/baseStyles';
import {capitalizeFormatter} from '../../util/formatters/textFormatter';

import {PokemonImageComp} from '../PokemonImage/PokemonImage';
import {type NavigatorStack} from '../../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const Wrapper = styled(Card)`
  border-radius: 10px;
  margin: 7.5px;
  position: relative;
  padding: 5px;
  width: 100%;
`;

const PokemonName = styled(AppText)<PokemonCardStyleProps>`
  text-align: center;
  color: ${props => props.theme.SECONDARY_COLOR};
  font-weight: 900;
  font-size: 18px;
  margin: 8px;
  background-color: transparent;
`;

export const PokemonCard = ({name, link}: PokemonCardProps) => {
  const navigation = useNavigation<NavigationProps['navigation']>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Detail', {
          link,
          name,
        })
      }>
      <Wrapper>
        <PokemonImageComp
          link={link}
          width="150px"
          height="150px"
          backgroundWidth="107%">
          <PokemonName>{capitalizeFormatter(name)}</PokemonName>
        </PokemonImageComp>
      </Wrapper>
    </TouchableOpacity>
  );
};

type PokemonCardProps = {
  name: string;
  link: string;
};

interface PokemonCardStyleProps extends ViewProps {
  rotateRight?: number | boolean;
}

type NavigationProps = NativeStackScreenProps<NavigatorStack, 'Detail'>;
