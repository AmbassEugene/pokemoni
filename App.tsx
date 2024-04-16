/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {ThemeProvider} from 'styled-components';
import {Routes} from './src/config/Routes';
import {useColorScheme} from 'react-native';
import {darkTheme, lightTheme} from './src/config/theme';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
