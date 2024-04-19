import {useEffect} from 'react';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import styled from 'styled-components/native';

const DURATION = 2000;
const EASING = Easing.bezier(0.25, -0.5, 0.25, 1);

export const useLoadingAnimation = (initialOffset = 10) => {
  const sv = useSharedValue(initialOffset);

  useEffect(() => {
    sv.value = withRepeat(
      withTiming(1, {duration: DURATION, easing: EASING}),
      -1,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${sv.value * 360}deg`}],
  }));

  return {animatedStyle};
};
