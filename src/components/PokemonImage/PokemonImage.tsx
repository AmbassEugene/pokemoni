import styled from 'styled-components/native';
import {getPokemonImgUri} from '../../util/formatters/getImage';
import {SvgUri} from 'react-native-svg';
import {Alert, ImageBackground} from 'react-native';
import {ReactNode} from 'react';

const PokemonImage = styled(SvgUri)`
  flex: 1;
  margin: auto;
`;

const BackgroundBlur = styled(ImageBackground)<BackgroundBlurStyleProps>`
  width: ${props => props.backgroundWidth};
`;

export const PokemonImageComp = ({
  link,
  width,
  height,
  backgroundWidth,
  children,
}: PokemonImageCompProps) => {
  return (
    <BackgroundBlur
      backgroundWidth={backgroundWidth}
      src={getPokemonImgUri(link, true)}
      blurRadius={6}>
      <PokemonImage
        width={width}
        height={height}
        uri={getPokemonImgUri(link)}
      />
      {children}
    </BackgroundBlur>
  );
};

type PokemonImageCompProps = {
  link: string;
  width: string;
  height: string;
  backgroundWidth: string;
  children?: ReactNode;
};

type BackgroundBlurStyleProps = {
  backgroundWidth: string;
};
