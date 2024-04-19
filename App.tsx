/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {ThemeProvider} from 'styled-components';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ErrorBoundary} from 'react-error-boundary';
import {darkTheme, lightTheme} from './src/config/theme';
import {Routes} from './src/config/Routes';
import {FallBackComp} from './src/components/FallBackComp/FallBackComp';

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
        <ErrorBoundary FallbackComponent={FallBackComp}>
          <Routes />
        </ErrorBoundary>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
