import styled from 'styled-components/native';
import {getPokemonImgUri} from '../../util/formatters/getImage';
import {SvgUri} from 'react-native-svg';
import {ImageBackground} from 'react-native';
import React, {ReactNode} from 'react';

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

// /Users/eugene/.rvm/gems/ruby-2.7.2/bin:/Users/eugene/.rvm/gems/ruby-2.7.2@global/bin:/Users/eugene/.rvm/rubies/ruby-2.7.2/bin:/Users/eugene/.nvm/versions/node/v20.2.0/bin:/Users/eugene/.yarn/bin:/Users/eugene/.config/yarn/global/node_modules/.bin:/Volumes/Ambass-EXT/opt/anaconda3/bin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/Applications/Postgres.app/Contents/Versions/latest/bin:/Users/eugene/Library/Android/sdk/platform-tools:/Users/eugene/.rvm/bin

// export ANDROID_HOME=/Users/eugene/Library/Android/build-tools/34.0.0
