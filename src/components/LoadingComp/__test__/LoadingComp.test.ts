import React from 'react';
import {render, screen} from '@testing-library/react-native'; // Use react-native version
import {LoadingComp} from '../LoadingComp'; // Assuming your component path

jest.mock('react-native-reanimated', () => ({
  useSharedValue: jest.fn().mockReturnValue({value: 0}),
  useAnimatedStyle: jest.fn().mockReturnValue({}),
}));

test('renders a loading image with rotation animation', () => {
  render(LoadingComp());

  // Assuming the image has alt text "loading"
  const image = screen.queryByAltText(/loading/i);
  expect(image).toBeInTheDocument();

  // Simulate animation progress (mocked useSharedValue)
  (useSharedValue as jest.Mock).mockReturnValueOnce({value: 90}); // Set a value for rotation

  // Update component (trigger re-render)
  render(LoadingComp());

  // Check for style containing the transformation (adjust selector if needed)
  expect(screen.getByTestId || screen.getByAltText).toHaveAttribute(
    'style',
    expect.stringContaining('rotate(360deg)'),
  );
});
