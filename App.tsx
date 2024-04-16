/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import {Routes} from './src/config/Routes';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  // return <HomeScreen />;
  return <Routes />;
}

export default App;
