import React from 'react';
import AuthStackNavigator from './navigation/AuthStackNavigator';
import {useSelector} from 'react-redux';
import {RootState} from './redux/store';
import {
  NavigationContainer,
  DarkTheme as DarkThemeNavigation,
  DefaultTheme as DefaultThemeNavigation,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DarkTheme as DarkThemePaper,
  DefaultTheme as DefaultThemePaper,
} from 'react-native-paper';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

export const customDefaultTheme = {
  ...DefaultThemePaper,
  ...DefaultThemeNavigation,
  colors: {
    ...DefaultThemePaper.colors,
    ...DefaultThemeNavigation.colors,
    primary: '#00c2cc',
    accent: '#222831',
    backgorund: '#EEEEEE',
    text: '#393E46',
    surface: '#EEEEEE',
  },
};

export const customDarkTheme = {
  ...DarkThemePaper,
  ...DarkThemeNavigation,
  colors: {
    ...DarkThemePaper.colors,
    ...DarkThemeNavigation.colors,
    primary: '#00c2cc',
    accent: '#222831',
    backgorund: '#393E46',
    text: '#EEEEEE',
    surface: '#393E46',
  },
};

const Index = () => {
  const {darkTheme} = useSelector((state: RootState) => state.settings);

  const theme = darkTheme ? customDarkTheme : customDefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <PaperProvider theme={theme}>
        <AuthStackNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default Index;
