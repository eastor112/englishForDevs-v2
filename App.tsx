import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  NavigationContainer,
  DarkTheme as DarkThemeNavigation,
  DefaultTheme as DefaultThemeNavigation,
} from '@react-navigation/native';
import {AppRegistry} from 'react-native';
import {
  Provider as PaperProvider,
  DarkTheme as DarkThemePaper,
  DefaultTheme as DefaultThemePaper,
} from 'react-native-paper';
import {name as appName} from './app.json';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';

const App = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDark(true);
    }, 5000);
  }, []);

  const customDefaultTheme = {
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

  const customDarkTheme = {
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

  const theme = dark ? customDarkTheme : customDefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <PaperProvider theme={theme}>
        <AuthStackNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
AppRegistry.registerComponent(appName, () => App);
