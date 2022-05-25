import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {useTheme} from 'react-native-paper';
import ReviewModes from '../screens/reviewModes/ReviewModes';
import StatsScreen from '../screens/stats/StatsScreen';
import LessonsStackNavigator from './LessonsStackNavigator';

const Tab = createMaterialBottomTabNavigator();

const MainBottomTabNavigator = () => {
  const {colors, dark} = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="LessonsNav"
      activeColor={dark ? '#00c2cc' : '#fff'}
      inactiveColor={colors.text}>
      <Tab.Screen
        name="LessonsNav"
        component={LessonsStackNavigator}
        options={{title: 'Lessons', tabBarIcon: 'book'}}
      />
      <Tab.Screen
        name="Review"
        component={ReviewModes}
        options={{title: 'Review modes', tabBarIcon: 'book-clock'}}
      />
      <Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{title: 'User stats', tabBarIcon: 'chart-histogram'}}
      />
    </Tab.Navigator>
  );
};

export default MainBottomTabNavigator;
