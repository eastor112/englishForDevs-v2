import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import MainBottomTabNavigator from './MainBottomTabNavigator';
import AboutScreen from '../screens/about/AboutScreen';
import ConfigScreen from '../screens/config/ConfigScreen';
import DrawerContent from '../components/organisms/drawerContent/DrawerContent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReviewScreen from '../screens/review/ReviewScreen';

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#00c2cc',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Main"
        component={MainBottomTabNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="bookmark-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={ConfigScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Practice"
        component={ReviewScreen}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
