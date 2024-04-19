import {useEffect} from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

/**
 * A hook that creates a hover animation
 * @param initialOffset {number}
 * @returns animatedStyles {object}
 */
export const useHoverAnimations = (initialOffset: number) => {
  const offset = useSharedValue(initialOffset);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {translateX: offset.value},
      {translateY: -offset.value},
      // {translateX: -offset.value},
    ],
  }));

  useEffect(() => {
    offset.value = withRepeat(
      withTiming(-offset.value, {duration: 1500}),
      -1,
      true,
    );
  }, []);

  return {animatedStyles};
};
