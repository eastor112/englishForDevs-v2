import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import MainBottomTabNavigator from './MainBottomTabNavigator';
import AboutScreen from '../screens/about/AboutScreen';
import ConfigScreen from '../screens/config/ConfigScreen';

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainBottomTabNavigator} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Config" component={ConfigScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
