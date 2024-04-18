import styled from 'styled-components/native';
import {AppText, Card} from '../../util/baseStyles';
import {ImageBackground, TouchableOpacity, ViewProps} from 'react-native';
import {capitalizeFormatter} from '../../util/formatters/textFormatter';

const Wrapper = styled(Card)`
  border-radius: 10px;
  margin: 10px;
  position: relative;
  padding: 0;
  width: 100%;
`;

const PokemonImage = styled.Image<PokemonCardStyleProps>`
  margin-top: 10px;
  height: 150px;
  width: 150px;
  border-radius: 75px;
`;

const PokemonName = styled(AppText)<PokemonCardStyleProps>`
  text-align: center;
  color: ${props => props.theme.SECONDARY_COLOR};
  font-weight: 900;
  font-size: 18px;
  margin: 10px;
  background-color: transparent;
`;

const BackgroundBlur = styled(ImageBackground)<PokemonCardStyleProps>``;

export const PokemonCard = ({imageUri, title, itemIndex}: PokemonCardProps) => {
  const rotateRight = itemIndex && itemIndex % 2 === 0;
  return (
    <TouchableOpacity>
      <Wrapper>
        <BackgroundBlur src={imageUri} blurRadius={10}>
          <PokemonImage
            rotateRight={rotateRight}
            resizeMode="contain"
            src={imageUri}
          />

          <PokemonName>{capitalizeFormatter(title)}</PokemonName>
        </BackgroundBlur>
      </Wrapper>
    </TouchableOpacity>
  );
};

type PokemonCardProps = {
  imageUri: string;
  title: string;
  itemIndex?: number;
};

interface PokemonCardStyleProps extends ViewProps {
  rotateRight?: number | boolean;
}
