import {View, Text} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import {useLoadingAnimation} from '../../util/hooks/useLoadingAnimation';

export const SmallLoader = () => {
  const {animatedStyle} = useLoadingAnimation();
  return (
    <Wrapper>
      <Animated.View style={animatedStyle}>
        <LoadingImage
          source={require('../../../assets/images/loadingBall.png')}
        />
      </Animated.View>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

const LoadingImage = styled.Image`
  width: 50px;
  height: 50px;
`;
