import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import store from './src/redux/store';
import {Provider as ReduxProvider} from 'react-redux';
import Index from './src/Index';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <Index />
    </ReduxProvider>
  );
};

export default App;
AppRegistry.registerComponent(appName, () => App);
