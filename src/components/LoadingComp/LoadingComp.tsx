import React from 'react';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import {Dimensions} from 'react-native';
import {useLoadingAnimation} from '../../util/hooks/useLoadingAnimation';

export const LoadingComp = () => {
  const {animatedStyle} = useLoadingAnimation();

  return (
    <Wrapper>
      <Animated.View style={animatedStyle}>
        <LoadingImage
          alt="pokemon loading"
          source={require('../../../assets/images/loadingBall.png')}
        />
      </Animated.View>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  height: ${Dimensions.get('screen').height - 100 + 'px'};
`;

const LoadingImage = styled.Image`
  width: 50px;
  height: 50px;
`;
