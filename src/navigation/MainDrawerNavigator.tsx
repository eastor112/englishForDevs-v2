import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import MainBottomTabNavigator from './MainBottomTabNavigator';
import AboutScreen from '../screens/about/AboutScreen';
import ConfigScreen from '../screens/config/ConfigScreen';
import DrawerContent from '../components/organisms/drawerContent/DrawerContent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReviewScreen from '../screens/review/ReviewScreen';
import WordsPracticeStackNavigator from './WordsPracticeStackNavigator';
import PhrasesPracticeStackNavigator from './PhrasesPracticeStackNavigator';
import {useTheme} from 'react-native-paper';

export type RootDrawerParamList = {
  Main: undefined;
  About: undefined;
  Settings: undefined;
  Review: undefined;
  WordsPracticeStack: undefined;
  PhrasesPracticeStack: undefined;
  Practice: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const MainDrawerNavigator = () => {
  const {colors} = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: colors.text,
        drawerInactiveTintColor: colors.text,
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
        name="WordsPracticeStack"
        component={WordsPracticeStackNavigator}
        options={{
          drawerItemStyle: {display: 'none'},
        }}
      />

      <Drawer.Screen
        name="PhrasesPracticeStack"
        component={PhrasesPracticeStackNavigator}
        options={{
          drawerItemStyle: {display: 'none'},
        }}
      />

      <Drawer.Screen
        name="Practice"
        component={ReviewScreen}
        options={{
          drawerItemStyle: {display: 'none'},
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
