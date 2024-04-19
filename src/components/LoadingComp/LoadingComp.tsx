import React from 'react';
import styled from 'styled-components/native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {Dimensions} from 'react-native';

const DURATION = 2000;
const EASING = Easing.bezier(0.25, -0.5, 0.25, 1);

export const LoadingComp = () => {
  const sv = useSharedValue(10);

  React.useEffect(() => {
    sv.value = withRepeat(
      withTiming(1, {duration: DURATION, easing: EASING}),
      -1,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${sv.value * 360}deg`}],
  }));
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
