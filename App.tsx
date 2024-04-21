/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import {StatusBar, useColorScheme} from 'react-native';
import {ErrorBoundary} from 'react-error-boundary';
import {darkTheme, lightTheme} from './src/config/theme';
import {Routes} from './src/config/Routes';
import {FallBackComp} from './src/components/FallBackComp/FallBackComp';
import {AppContext} from './src/util/contexts/contexts';

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(() =>
    colorScheme === 'light' ? false : true,
  );
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <AppContext.Provider value={{isDarkMode, setIsDarkMode}}>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={theme.PRIMARY_BACKGROUND_COLOR}
          />
          <ErrorBoundary FallbackComponent={FallBackComp}>
            <Routes />
          </ErrorBoundary>
        </SafeArea>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
