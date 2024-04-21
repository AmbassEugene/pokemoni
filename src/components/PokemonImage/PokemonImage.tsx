import styled from 'styled-components/native';
import {getPokemonImgUri} from '../../util/formatters/getImage';
import {SvgUri} from 'react-native-svg';
import {ImageBackground} from 'react-native';
import React, {ReactNode, useState} from 'react';

const PokemonImage = styled(SvgUri)`
  flex: 1;
  margin: auto;
`;

const ImageWrap = styled.View`
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
`;

const PlaceholderImg = styled.Image`
  width: 80px;
  height: 80px;
  opacity: 0.8;
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
  const [loaded, setLoaded] = useState(false);

  return (
    <BackgroundBlur
      backgroundWidth={backgroundWidth}
      src={getPokemonImgUri(link, true)}
      blurRadius={6}>
      <PokemonImage
        width={width}
        height={height}
        uri={getPokemonImgUri(link)}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <ImageWrap>
          <PlaceholderImg
            source={require('../../../assets/images/loadingBall.png')}
          />
        </ImageWrap>
      )}
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
