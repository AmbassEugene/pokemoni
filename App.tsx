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
import {StatusBar, useColorScheme} from 'react-native';
import {darkTheme, lightTheme} from './src/config/theme';
import {SafeAreaView} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'}
          backgroundColor={theme.PRIMARY_BACKGROUND_COLOR}
        />
        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
